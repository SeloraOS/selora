# Selora Asset Manifest

This file documents every generated visual asset expected by the website.
Assets are produced by a separate AI vision-generation agent and dropped
into these paths without changing component code — components reference
these exact paths via `getAsset()` and render through `<AssetImage>`, which
falls back to a CSS placeholder if a file is missing. See `assets.md` at
the project root for the vision agent's own generation tracker.

Status legend: ✅ present (vision-agent render) · 🎨 present (interim hand-built SVG — swap for the vision agent's photographic render when available) · ⏳ missing (CSS fallback renders in its place)

## hero/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `hero-dashboard.webp` | ✅ | Main hero visual — Selora business OS dashboard (CRM pipeline, revenue metrics, active leads, team, charts) | 1264×848 | WebP | Opaque, light UI |

## services/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `crm.webp` | ✅ | CRM service card / modal illustration | 1024×1024 | WebP | Transparent or light |
| `erp.webp` | ✅ | ERP service card / modal illustration | 1024×1024 | WebP | Transparent or light |
| `custom-software.webp` | ✅ | Custom Software service illustration | 1024×1024 | WebP | Transparent or light |
| `automation.webp` | ✅ | Automation & Integrations illustration | 1024×1024 | WebP | Transparent or light |
| `support.webp` | ✅ | Technical Support illustration | 1024×1024 | WebP | Transparent or light |

## products/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `crm-dashboard.webp` | ✅ | CRM pipeline visual used in the "Why Selora" split section | 1264×848 | WebP | Opaque, light UI |
| `erp-dashboard.webp` | ✅ | ERP tab visual in the Services page Product Showcase | 1264×848 | WebP | Opaque, light UI |
| `automation-workflow.webp` | ✅ | Automation tab visual in the Services page Product Showcase | 1264×848 | WebP | Opaque, light UI |

## projects/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `real-estate-crm.webp` | ✅ | Case study card — Real Estate CRM Platform | 1264×848 | WebP | Opaque |
| `manufacturing-erp.webp` | ✅ | Case study card — Manufacturing ERP Suite | 1264×848 | WebP | Opaque |
| `custom-platform.webp` | ✅ | Case study card — Custom Operations Platform | 1264×848 | WebP | Opaque |
| `logistics-platform.webp` | ✅ | Case study card — Logistics Fleet Platform | 1264×848 | WebP | Opaque |

## industries/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `real-estate.webp` … `startups.webp` | ⏳ | Reserved for future decorative use — the current Industries strip uses inline Lucide icons per the approved design, not photography | 900×700 | WebP | Light |

## testimonials/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `avatar-01.svg` | 🎨 | Interim initials avatar (RS) — Rohit Shah | 400×400 | SVG | Solid gradient circle |
| `avatar-02.svg` | 🎨 | Interim initials avatar (AK) — Dr. Ayesha Khan | 400×400 | SVG | Solid gradient circle |
| `avatar-03.svg` | 🎨 | Interim initials avatar (NP) — Nikhil Patil | 400×400 | SVG | Solid gradient circle |

## cta/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `cta-office.svg` | 🎨 | Interim abstract gradient/grid graphic for the closing CTA band | 1800×900 | SVG | Opaque, works under a dark overlay |

## decorative/

| File | Status | Purpose | Recommended size | Format | Background |
|---|---|---|---|---|---|
| `soft-grid.webp` | ⏳ | Optional decorative background texture | 1200×800 | WebP | Transparent |
| `abstract-orb.webp` | ⏳ | Optional decorative accent graphic | 1000×1000 | WebP | Transparent |
| `data-pattern.webp` | ⏳ | Optional subtle geometric background pattern | 1200×800 | WebP | Transparent |
| `noise-texture.webp` | ⏳ | Optional grain/noise overlay texture | 1000×1000 | WebP | Transparent |

---

**Note on missing assets:** Every section referencing a ⏳ asset renders a
neutral CSS placeholder (a light grid background with a small "Asset
pending" label, or a solid fallback where composited on a dark section)
via `AssetImage`, so the layout never breaks. Once a file is generated and
dropped into the matching path, it appears automatically — no component
changes required.
