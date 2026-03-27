const boatsGrid = document.getElementById('boatsGrid');
const searchForm = document.getElementById('searchForm');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const authStatus = document.getElementById('authStatus');
const bookingForm = document.getElementById('bookingForm');
const bookingStatus = document.getElementById('bookingStatus');
const selectedBoatLabel = document.getElementById('selectedBoat');
const boatIdField = document.getElementById('boatId');

let token = localStorage.getItem('boatlink_token') || '';

function currency(v) {
  return `${v} د.ك / ساعة`;
}

function renderBoats(items) {
  if (!items.length) {
    boatsGrid.innerHTML = '<p>لا توجد نتائج مطابقة.</p>';
    return;
  }

  boatsGrid.innerHTML = items
    .map((boat) => {
      return `
      <article class="card">
        <img class="thumb" src="${boat.image}" alt="${boat.name}" />
        <h3>${boat.name}</h3>
        <p>${boat.area} • حتى ${boat.guests} ضيف</p>
        <p>⭐ ${boat.rating} (${boat.reviews})</p>
        <p><strong>${currency(boat.pricePerHour)}</strong></p>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
          <a class="btn btn-ghost" href="/boat.html?id=${boat.id}">تفاصيل القارب</a>
          <button class="btn btn-primary" data-select-boat="${boat.id}" data-name="${boat.name}">اختيار للحجز</button>
        </div>
      </article>`;
    })
    .join('');

  document.querySelectorAll('[data-select-boat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      boatIdField.value = btn.dataset.selectBoat;
      selectedBoatLabel.textContent = btn.dataset.name;
      window.location.hash = 'checkoutSection';
    });
  });
}

async function fetchBoats(params = '') {
  const res = await fetch(`/api/boats${params}`);
  const data = await res.json();
  renderBoats(data.items || []);
}

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const payload = Object.fromEntries(formData.entries());

  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  authStatus.textContent = res.ok ? `تم إنشاء الحساب: ${data.email}` : `خطأ: ${data.error}`;
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const payload = Object.fromEntries(formData.entries());

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    authStatus.textContent = `خطأ: ${data.error}`;
    return;
  }

  token = data.token;
  localStorage.setItem('boatlink_token', token);
  authStatus.textContent = `مرحباً ${data.user.name} (${data.user.role})`;
});

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(searchForm);
  const location = formData.get('location') || '';
  const guests = formData.get('guests') || '';
  const duration = formData.get('duration') || '';
  const query = new URLSearchParams({ location, guests, duration });
  await fetchBoats(`?${query.toString()}`);
});

bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!token) {
    bookingStatus.textContent = 'يرجى تسجيل الدخول أولاً.';
    return;
  }

  const formData = new FormData(bookingForm);
  const payload = {
    boatId: formData.get('boatId'),
    date: formData.get('date'),
    hours: Number(formData.get('hours')),
    guests: Number(formData.get('guests')),
    paymentMethod: formData.get('paymentMethod'),
    acceptPolicy: formData.get('acceptPolicy') === 'on',
  };

  const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    bookingStatus.textContent = `فشل الحجز: ${data.error}`;
    return;
  }

  bookingStatus.textContent = `✅ تم تأكيد الحجز رقم ${data.booking.id} بمبلغ ${data.booking.totalPrice} د.ك`;
});

fetchBoats();
