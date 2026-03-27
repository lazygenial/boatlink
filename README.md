# BoatLink

Prototype upgraded to a functional MVP flow for launch-readiness work:

- Search boats from API.
- Real user register/login for renter/owner roles.
- Boat details page per boat.
- End-to-end booking flow (search → select → confirm & pay → confirmation).
- Explicit cancellation/refund policy acceptance at checkout.

## Run

```bash
npm run dev
```

Open: `http://localhost:5173`

## API quick check

- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/boats`
- `GET /api/boats/:id`
- `POST /api/bookings` (requires `Authorization: Bearer <token>`)
