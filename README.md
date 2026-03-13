# boatlink

BoatLink is a boat rental marketplace in Kuwait connecting boat owners with renters.

## Landing page prototype

The prototype in `index.html` now covers:
- A clear value proposition in the hero section.
- Two main CTAs: **Search boats now** and **List your boat**.
- A compact trust section.
- **Task #2 booking flow improvements**:
  - booking filters (area, price, capacity, duration)
  - mock boat results list
  - explicit 3-step checkout flow (select boat → confirm & pay → booking confirmed)
- **Task #3 trust & safety improvements**:
  - simplified KYC trust messaging for renters and owners
  - explicit payment and refund policy bullets
  - clear support channels (WhatsApp and phone)
- **Task #4 conversion improvements (CRO)**:
  - A/B testing idea cards for CTA text and content order
  - quick request form for hesitant users
  - fixed bottom quick-conversion banner
- **Task #5 local SEO improvements**:
  - localized meta tags and canonical URL
  - LocalBusiness schema (JSON-LD)
  - local SEO landing-link ideas + Kuwait-focused blog topics
- **Task #6 technical performance improvements**:
  - optimized hero media loading attributes and explicit dimensions
  - basic conversion event tracking scaffold via `dataLayer`
  - documented Core Web Vitals targets in-page
- **UI v2 visual refresh**:
  - modernized hero layout with improved visual hierarchy
  - sticky top navigation and cleaner bottom conversion bar
  - refreshed card system, spacing, and color treatment while preserving RTL Arabic content

### Run locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
