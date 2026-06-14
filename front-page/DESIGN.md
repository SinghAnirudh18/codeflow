---
name: Vibe-Coded Intelligence
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#f5fff4'
  on-secondary: '#00391f'
  secondary-container: '#16ff9e'
  on-secondary-container: '#007243'
  tertiary: '#fce6ff'
  on-tertiary: '#520071'
  tertiary-container: '#f0c0ff'
  on-tertiary-container: '#9100c4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#56ffa8'
  secondary-fixed-dim: '#00e38b'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#00522f'
  tertiary-fixed: '#f8d8ff'
  tertiary-fixed-dim: '#ecb2ff'
  on-tertiary-fixed: '#320047'
  on-tertiary-fixed-variant: '#74009f'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  bento-gap: 16px
---

## Brand & Style

The visual identity of the design system is rooted in the "vibe-coded" developer aesthetic—a fusion of high-utility DevOps tooling and high-energy gamification. It targets a sophisticated audience of engineers and security researchers who value precision but crave a more immersive, modern environment than traditional enterprise dashboards.

The design style leverages **Glassmorphism** and **Corporate Modern** elements with a **High-Contrast** twist. It features a deep, obsidian-like foundation punctuated by electric neon accents that signify action, rewards, and system status. The interface feels "alive" through the use of glowing borders, subtle backdrop blurs, and a modular bento-box layout that organizes complex data into digestible, high-fidelity units.

## Colors

The palette is optimized for a low-light, high-focus environment. 

- **Primary (Electric Blue):** Used for primary actions, active states, and critical code-intelligence pathways.
- **Secondary (Emerald Green):** Dedicated to "Accepted" statuses, bounty successes, and positive gamification feedback.
- **Tertiary (Tech Purple):** Reserved for special AI features, rare achievements, and decorative "vibe" accents.
- **Neutral:** A range of near-black grays that provide depth without pure black's harshness.

Surfaces use subtle transparency. Backgrounds should utilize a deep radial gradient—moving from a slightly lighter central dark gray (#161618) to the terminal neutral (#0A0A0B)—to prevent the screen from feeling flat.

## Typography

This design system utilizes **Geist** for its clinical precision and modern Swiss-influenced character. It provides a technical yet premium feel that bridges the gap between a code editor and a high-end marketing site.

**JetBrains Mono** is used selectively for data-heavy labels, point values, and actual code snippets to reinforce the developer-centric nature of the platform.

Use tight letter-spacing on large headings to enhance the "ultra-modern" look. For body text, maintain standard spacing to ensure readability during long code review sessions.

## Layout & Spacing

The layout follows a **Fixed Grid** bento-box philosophy. Content is grouped into distinct, logical containers with consistent gaps.

- **Desktop (1440px+):** 12-column grid, 40px side margins, 24px gutters.
- **Tablet (768px - 1439px):** 8-column grid, 24px side margins.
- **Mobile (<767px):** 4-column grid, 16px side margins. Bento boxes stack vertically.

Use a 4px base scaling unit. Components should rely on internal padding of 16px or 24px to maintain a spacious, professional feel. Layouts should prioritize "Information Density" within the bento tiles while maintaining "Whitespace Harmony" between the tiles themselves.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Backdrop Blurs** rather than traditional heavy shadows.

1.  **Level 0 (Base):** The darkest neutral background.
2.  **Level 1 (Bento Tiles):** Surface color with a 1px "inner-glow" border (10% opacity white) and a subtle 0.5px solid border in a neutral tone.
3.  **Level 2 (Popovers/Modals):** Glassmorphic surfaces with `backdrop-filter: blur(12px)`, 60% opacity surface color, and a faint outer glow matching the primary or secondary color.

Shadows, when used, are "Ambient Glows"—highly diffused (40px-60px blur) with very low opacity (5-8%) tinted to match the accent color of the specific component.

## Shapes

The shape language is "Sophisticated Soft." Elements are neither aggressively sharp nor overly bubbly. 

- **Containers/Cards:** 1rem (16px) radius to create the signature bento-box look.
- **Buttons/Inputs:** 0.5rem (8px) for a precise, tool-like appearance.
- **Status Chips:** Full pill-shape for high contrast against the rectilinear grid.

## Components

### Buttons
- **Primary:** Solid Primary color with black text. On hover, apply a 10px outer glow of the same color.
- **Secondary/Ghost:** 1px Primary color border with a transparent background. On hover, fill with 10% Primary color opacity.

### Bento Cards
Every card must have a 1px border (`#FFFFFF1A`). For "featured" or "gamified" sections, the border can be a subtle gradient (e.g., Primary to Tertiary).

### Inputs
Darker than the bento surface, with a "focus" state that triggers a 1px glowing border and a faint inner shadow to create a "pressed-in" feel.

### Chips & Badges
Small, high-contrast markers. Use JetBrains Mono for the text within chips. Gamified badges (e.g., "Top Hunter") should feature a subtle animation or a more vibrant glow.

### Leaderboards & Lists
Use "Zebra-striping" with alternating surface opacities (100% and 80%) to maintain legibility without using lines. Items should have a subtle hover state that lifts the element using a primary-colored left border-accent.