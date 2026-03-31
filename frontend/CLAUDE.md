# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

**Environment:** Copy `.env.example` to `.env` and set `VITE_WHATSAPP_NUMBER` before running.

## VPS Deployment

```bash
npm run build
# Copy dist/ to VPS, e.g.: rsync -avz dist/ user@vps:/var/www/homestay/
```

nginx config:
```nginx
server {
  listen 80;
  root /var/www/homestay;
  index index.html;
  location / { try_files $uri $uri/ /index.html; }
}
```

## Project Overview

This is the MVP for **Konkan Village Reset** — a conversion-focused landing page that sells a "2-Day Konkan Village Reset Experience" to Mumbai/Pune professionals. The goal is not a feature-rich app; it's a single-page conversion engine that drives WhatsApp inquiries.

**Primary goal:** Generate first 10–20 paying customers via a single CTA → WhatsApp booking flow.

## Product Principles (from PRD)

- One clear action > many options
- Emotion > information
- Simplicity > completeness
- Real > polished

**What is NOT being built:** marketplace, payment gateway, user accounts, complex backend.

## Page Structure

The site has 7 sections in order:

1. **Hero** — Headline: "Escape the Noise. Experience Real Konkan Village Life." + CTA
2. **Problem** — Relatability: tired of crowded, noisy vacations
3. **Solution** — Simple village experience breakdown (4 bullet points)
4. **Experience** — 2-day itinerary (Day 1: arrival/walk/dinner, Day 2: temple/beach, Day 3: breakfast/depart)
5. **Trust** — 2–3 testimonials
6. **Host Credibility** — "Hosted by local families in our native village in Konkan" + home images
7. **Final CTA** — "Ready to take a break from city life?" + CTA

CTA appears **3–4 times** across the page. Button text alternates between "Plan Your Stay" and "Check Availability".

## WhatsApp CTA Integration

All CTA buttons open WhatsApp with a pre-filled message:

```
https://wa.me/<PHONE_NUMBER>?text=Hi%2C%20I'm%20interested%20in%20the%20Konkan%20Village%20Reset%20experience
```

The phone number should be stored in an environment variable or config — never hardcoded in multiple places.

## Success Metrics to Support

Track these with analytics (e.g., Google Analytics events or Plausible):
- CTA button clicks
- WhatsApp redirect completions
- Conversion rate (visit → inquiry)
