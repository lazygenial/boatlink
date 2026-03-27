const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const port = process.env.PORT || 5173;
const root = __dirname;
const dataDir = path.join(root, 'data');
const usersPath = path.join(dataDir, 'users.json');
const bookingsPath = path.join(dataDir, 'bookings.json');
const boatsPath = path.join(dataDir, 'boats.json');

const sessions = new Map();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

ensureDataFiles();

function ensureDataFiles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(usersPath)) fs.writeFileSync(usersPath, '[]');
  if (!fs.existsSync(bookingsPath)) fs.writeFileSync(bookingsPath, '[]');
  if (!fs.existsSync(boatsPath)) {
    const seedBoats = [
      { id: 'boat-1', name: 'يخت 42 قدم', area: 'مارينا', guests: 12, durationHours: 4, pricePerHour: 120, rating: 4.9, reviews: 112, image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&w=1200&q=80', description: 'يخت فاخر مناسب للمناسبات والجلسات البحرية الخاصة.' },
      { id: 'boat-2', name: 'قارب عائلي', area: 'السالمية', guests: 8, durationHours: 6, pricePerHour: 85, rating: 4.8, reviews: 73, image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80', description: 'خيار ممتاز للعائلات مع وسائل راحة كاملة.' },
      { id: 'boat-3', name: 'رحلة صيد', area: 'الخيران', guests: 10, durationHours: 8, pricePerHour: 95, rating: 4.7, reviews: 51, image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80', description: 'قارب مجهز بالكامل لرحلات الصيد.' }
    ];
    fs.writeFileSync(boatsPath, JSON.stringify(seedBoats, null, 2));
  }
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function json(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

function notFound(res) {
  json(res, 404, { error: 'Not Found' });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e6) req.destroy();
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(new Error('Invalid JSON'));
      }
    });
  });
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function authUser(req) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token || !sessions.has(token)) return null;
  return sessions.get(token);
}

async function handleApi(req, res, pathname, searchParams) {
  if (req.method === 'GET' && pathname === '/api/health') {
    return json(res, 200, { ok: true, service: 'boatlink-api' });
  }

  if (req.method === 'POST' && pathname === '/api/auth/register') {
    const { name, email, password, role } = await parseBody(req);
    if (!name || !email || !password || !role) return json(res, 400, { error: 'name, email, password, role required' });
    if (!['renter', 'owner'].includes(role)) return json(res, 400, { error: 'role must be renter or owner' });

    const users = readJson(usersPath);
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return json(res, 409, { error: 'Email already exists' });
    }

    const user = {
      id: crypto.randomUUID(),
      name,
      email: email.toLowerCase(),
      passwordHash: hashPassword(password),
      role,
      createdAt: new Date().toISOString(),
    };

    users.push(user);
    writeJson(usersPath, users);
    return json(res, 201, { id: user.id, name: user.name, email: user.email, role: user.role });
  }

  if (req.method === 'POST' && pathname === '/api/auth/login') {
    const { email, password } = await parseBody(req);
    if (!email || !password) return json(res, 400, { error: 'email and password required' });

    const users = readJson(usersPath);
    const user = users.find((u) => u.email === email.toLowerCase() && u.passwordHash === hashPassword(password));
    if (!user) return json(res, 401, { error: 'Invalid credentials' });

    const token = crypto.randomBytes(24).toString('hex');
    sessions.set(token, { id: user.id, name: user.name, email: user.email, role: user.role });

    return json(res, 200, {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  }

  if (req.method === 'GET' && pathname === '/api/boats') {
    const boats = readJson(boatsPath);
    const location = (searchParams.get('location') || '').toLowerCase().trim();
    const minGuests = Number(searchParams.get('guests') || 0);
    const minDuration = Number(searchParams.get('duration') || 0);

    const filtered = boats.filter((boat) => {
      const locationMatch = !location || boat.area.toLowerCase().includes(location);
      const guestsMatch = !minGuests || boat.guests >= minGuests;
      const durationMatch = !minDuration || boat.durationHours >= minDuration;
      return locationMatch && guestsMatch && durationMatch;
    });

    return json(res, 200, { items: filtered });
  }

  if (req.method === 'GET' && pathname.startsWith('/api/boats/')) {
    const id = pathname.split('/').pop();
    const boats = readJson(boatsPath);
    const boat = boats.find((b) => b.id === id);
    if (!boat) return notFound(res);
    return json(res, 200, boat);
  }

  if (req.method === 'POST' && pathname === '/api/bookings') {
    const user = authUser(req);
    if (!user) return json(res, 401, { error: 'Unauthorized' });

    const { boatId, date, hours, guests, paymentMethod, acceptPolicy } = await parseBody(req);

    if (!boatId || !date || !hours || !guests || !paymentMethod) {
      return json(res, 400, { error: 'boatId, date, hours, guests, paymentMethod required' });
    }
    if (!acceptPolicy) return json(res, 400, { error: 'Refund/Cancellation policy acceptance required' });

    const boats = readJson(boatsPath);
    const boat = boats.find((b) => b.id === boatId);
    if (!boat) return json(res, 404, { error: 'Boat not found' });

    const totalPrice = Number(hours) * boat.pricePerHour;

    const bookings = readJson(bookingsPath);
    const booking = {
      id: `bk-${Date.now()}`,
      userId: user.id,
      boatId,
      boatName: boat.name,
      date,
      hours: Number(hours),
      guests: Number(guests),
      paymentMethod,
      totalPrice,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);
    writeJson(bookingsPath, bookings);

    return json(res, 201, { message: 'Booking confirmed', booking });
  }

  return notFound(res);
}

function serveStatic(req, res, pathname) {
  const reqPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.normalize(path.join(root, reqPath));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

http
  .createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host}`);
      if (url.pathname.startsWith('/api/')) {
        return await handleApi(req, res, url.pathname, url.searchParams);
      }
      serveStatic(req, res, url.pathname);
    } catch (error) {
      json(res, 500, { error: 'Internal server error' });
    }
  })
  .listen(port, () => {
    console.log(`BoatLink server running at http://localhost:${port}`);
  });
