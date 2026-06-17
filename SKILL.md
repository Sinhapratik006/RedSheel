---
name: "redsheel"
description: "RedSheel website design-system guidance for a warm, sharp community-growth marketing site with cream/dark surfaces, #f34451 accents, dashed section dividers, bento grids, and restrained motion."
metadata:
  author: redsheel
---

# RedSheel Design System Skill

## Mission

Guide future RedSheel website edits so every page feels like one product: warm, focused, trustworthy, and clean. Build with the existing Next.js components first, especially `SectionShell`, `SectionHeading`, `BentoCard`, `Button`, `theme-card`, `theme-card-muted`, `theme-pill`, and `theme-copy`.

## Brand

RedSheel helps brands build authority across Reddit, X, Hacker News, Discord, and LinkedIn. The interface should feel like a calm strategy system, not a loud startup landing page. Use editorial display type, mono utility text, cream surfaces, dark roasted-brown mode, red accents, dashed separators, and bento layouts.

## Tokens And Foundations

- Accent: `#f34451` via `brand-500`.
- Accent hover: `#d93240` via `brand-600`.
- Light page: `#f5efe4`.
- Light card: `#fff9f1`.
- Light muted: `#fbf4ea`.
- Light text: `#241913`.
- Light copy: `#6f5947`.
- Dark page: `#17120f`.
- Dark card: `#241c16`.
- Dark muted: `#1d1713`.
- Dark text: `#fff7ec`.
- Dark copy: `#b7a28a`.
- Display font: Fraunces.
- Body and mono font: JetBrains Mono.
- Main container: `max-w-7xl px-5 sm:px-8 lg:px-12`.
- Card radius: `26px`.
- Muted/tool radius: `22px`.
- Pills and CTAs: full radius.

## Layout Rules

- Use `SectionShell` for major sections.
- Keep content inside the standard max-width container unless the component is intentionally full-bleed.
- Use full-width dashed section separators through `SectionShell`.
- Use `pt-44 pb-24 lg:pt-52 lg:pb-32` for page-first sections.
- Use `py-20 sm:py-24 lg:py-28` for compact home sections.
- Use `py-24 sm:py-28 lg:py-32` for standard supporting sections.
- Footer content must align to the nav container width.
- Do not create extra outer cards around every section; section structure should come from spacing, dividers, and bento grids.

## Component Rules

### Cards

- Use `.theme-card` for primary framed surfaces.
- Use `.theme-card-muted` for quieter inner surfaces and placeholders.
- Avoid nested cards unless the inner surface is a real tool panel, repeated row, modal, or embed.
- Do not add random corner icons, decorative lines, or unused top-left markers.

### Bento

- Use `BentoCard` for services, results, process, platform, team, and overview grids.
- Prefer varied spans and hierarchy over identical cards.
- Bento hover uses border color, subtle red glow, cursor radial highlight, and magnetic movement.
- Bento cards must not use vertical lift hover.
- Magnetic return should be smooth when the cursor exits.

### Buttons

- Primary buttons must use `bg-brand-500 hover:bg-brand-600`.
- Secondary buttons use cream/dark surfaces and subtle hover background only.
- Buttons keep dashed inner chrome where already established.
- Buttons and CTA icons must not move on hover or active.
- Avoid `hover:-translate-*`, `group-hover:translate-*`, `hover:scale-*`, and `active:scale-*` on buttons.

### Navigation And Logo

- Do not change the logo unless explicitly requested.
- Logo should stay proportionate at `h-10 sm:h-11`.
- Navbar remains fixed with dashed bottom border and translucent cream/dark background.
- Active nav links use brand red; inactive links stay muted.
- Do not scale the logo on hover.

### FAQ

- FAQ should be a separate simple section, not a heavy card stack.
- Use a heading, compact copy if needed, and smooth accordion open/close.
- Icons use brand red.

### Communities

- Communities carousel should be clean and wide, with real platform icons and text.
- Do not wrap the whole section in an extra outer card.
- Use fade masks at the left and right edges.

### Calendar

- Treat Cal.com as a third-party embed, not a fully controlled RedSheel component.
- Style only the outer wrapper: card frame, radius, border, spacing, and scroll behavior.
- Make the calendar frame scrollable when content exceeds height.
- Do not aggressively override the internal Cal iframe theme, custom scrollbar, or calendar background unless the user explicitly asks again.

## Motion Rules

- Allowed: section reveal, FAQ accordion, carousel marquee, bento magnetic cursor effect, bento glow.
- Not allowed: button movement, icon slide on CTA hover, logo scale, bento lift hover, decorative floating blobs.
- Keep transitions quiet and fast. Movement should feel tactile, not flashy.

## Copy Rules

- Keep copy plain and useful.
- Avoid jargon, filler, and inflated claims.
- Prefer one short description per section.
- Do not explain UI features inside the UI.
- Use business-specific language: trust, demand, founder voice, community proof, useful replies, handoffs.

## Workflow For Future Edits

1. Read the nearby component before editing.
2. Reuse existing tokens and helpers from `globals.css` and `src/components`.
3. Keep edits scoped to the requested section.
4. Match section width, spacing, radius, and dashed divider rhythm.
5. Run `npm run build`.
6. For visual changes, inspect the page in browser when possible.

## QA Checklist

- Accent is `#f34451` through `brand-500`.
- Section uses the standard container and divider rhythm.
- No button or CTA icon moves on hover.
- Bento grids use magnetic hover, not lift hover.
- Text fits inside cards, buttons, and pills on mobile.
- Light and dark mode both have readable contrast.
- Build passes.
