---
name: RedSheel
colors:
  brand: "#f34451"
  brandHover: "#d93240"
  lightPage: "#f5efe4"
  lightCard: "#fff9f1"
  lightMuted: "#fbf4ea"
  lightText: "#241913"
  lightCopy: "#6f5947"
  darkPage: "#17120f"
  darkCard: "#241c16"
  darkMuted: "#1d1713"
  darkText: "#fff7ec"
  darkCopy: "#b7a28a"
typography:
  display:
    fontFamily: "Plus Jakarta Sans"
    weights: "400, 700"
  body:
    fontFamily: "Manrope"
  mono:
    fontFamily: "Geist Mono"
spacing:
  container: "max-w-7xl with px-5 sm:px-8 lg:px-12"
  section: "py-20/24/28 for compact home sections, py-24/28/32 for standard sections, pt-44 lg:pt-52 for page intros"
rounded:
  card: 26px
  mutedCard: 22px
  tool: 18px
  pill: 9999px
---

## Overview

RedSheel is a focused community-growth marketing site. The design should feel sharp, warm, and systems-led: cream paper surfaces, dark roasted-brown mode, red accent, dashed separators, large editorial headings, and dense bento layouts. Avoid generic SaaS blue, sketchy illustration language, heavy gradients, and over-decorated cards.

## Foundations

- **Page shell:** light `#f5efe4`, dark `#17120f`.
- **Primary accent:** `#f34451`; hover/deeper accent `#d93240`.
- **Display type:** Plus Jakarta Sans for major headings, card metrics, and sharp marketing labels.
- **Body type:** Manrope for navigation, body copy, buttons, and most interface text.
- **Utility type:** Geist Mono only for small pills, handles, and eyebrow labels.
- **Letter spacing:** keep normal for headings and body; use uppercase mono tracking only for tiny utility text.
- **Copy style:** plain, short, useful. No jargon-heavy marketing paragraphs.

## Layout And Containers

- Use `SectionShell` for major sections.
- Default section content width is `max-w-7xl`.
- Container padding is `px-5 sm:px-8 lg:px-12`.
- Every main section uses a full-width dashed bottom separator: `border-b-2 border-dashed`.
- Footer uses the same max-width inner container as nav: `max-w-7xl px-4 sm:px-8 lg:px-12`.
- Standard page intro spacing is `pt-44 pb-24 lg:pt-52 lg:pb-32`.
- Compact home sections use `py-20 sm:py-24 lg:py-28`.
- Standard supporting sections use `py-24 sm:py-28 lg:py-32`.
- Keep section gaps breathable but consistent; do not create oversized landing-page gaps.

## Surfaces

- Main cards use `.theme-card`: radius `26px`, border `#d6c7b4`, background `#fff9f1`, dark `#241c16`.
- Muted cards use `.theme-card-muted`: radius `22px`, background `#fbf4ea`, dark `#1d1713`.
- Tool-like inner panels may use `18px` to `22px` radius.
- Avoid cards inside cards unless the inner card is a real tool panel, repeated item, or embed frame.
- Do not add random icon marks, corner lines, decorative blobs, or extra borders that do not serve structure.

## Bento Grids

- Use bento grids for service/result/explore/team sections where multiple items need hierarchy.
- Use varied spans and proportions, not identical generic cards when content importance differs.
- Bento cards use red hover border, subtle red glow, and cursor-follow radial highlight.
- Bento cards may use the magnetic cursor effect. The pull is subtle and returns smoothly on mouse leave.
- Do not use vertical lift hover like `hover:-translate-y-*` for bento cards.
- Keep bento text compact: label, heading, one useful sentence, and short chips where needed.

## Buttons And Links

- Primary buttons use `bg-brand-500` with `hover:bg-brand-600`.
- Primary button shadow uses `rgba(243,68,81,0.24)`.
- Buttons keep dashed inner chrome when primary or secondary.
- Buttons must not move on hover: no lift, no icon slide, no active shrink.
- Link hover may change color only; avoid scale or movement on nav/logo/footer links.
- Icons inside buttons stay stable.

## Navigation And Logo

- Do not change the logo unless explicitly asked.
- Logo size should stay balanced with nav height: `h-10 sm:h-11`.
- Navbar is fixed, full-width, dashed bottom border, cream/dark translucent background.
- Desktop nav is quiet and compact; active link uses brand red.
- Mobile menu keeps the same card, dashed, and button language.

## Motion

- Allowed: opacity/position reveal on section entry, bento magnetic cursor effect, subtle glow/radial cursor highlight, FAQ accordion open/close.
- Not allowed: button movement, CTA icon movement, logo scale, card lift hover, decorative floating blobs.
- Magnetic bento return should feel soft: short tracking duration while hovering, longer eased return when leaving.

## Calendar And Embeds

- Cal.com is a third-party embed and should mostly stay default.
- Only the outer RedSheel wrapper should be styled: card frame, radius, border, spacing, and scroll behavior.
- The calendar wrapper should be scrollable when content exceeds the frame.
- Do not document or depend on heavy internal Cal.com theme overrides, custom scrollbar styling, or iframe-level restyling.

## Accessibility And QA

- Text must not overflow buttons, cards, or pills on mobile.
- Keep focus-visible styles on links and buttons.
- Maintain readable contrast in light and dark mode.
- Verify responsive layout at mobile and desktop widths after visual changes.
- Run `npm run build` after design-system edits.
