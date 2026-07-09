---
name: Longevity Medical System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006387'
  on-tertiary: '#ffffff'
  tertiary-container: '#007da9'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system for this medical platform is built on the pillars of **precision, vitality, and empathy**. Designed specifically for the longevity and wellness sector, the aesthetic avoids the sterile coldness of traditional clinics, opting instead for a "Medical-Grade Modernism." 

The style is **Flat and Clean**, utilizing expansive whitespace to reduce cognitive load for patients and practitioners. By emphasizing high-contrast readability and a calming emerald-based palette, the interface fosters a sense of professional reliability and proactive health management. The emotional response should be one of "controlled optimism"—the feeling that one's health is being managed with the latest technology and the highest care.

## Colors
The color palette is anchored by **Emerald Green (#059669)**, symbolizing growth, health, and renewal. This is paired with a **Deep Navy (#0F172A)** for primary text and navigation to provide an anchor of authority and trust.

- **Primary (Emerald):** Used for primary actions, success states, and brand highlights.
- **Secondary (Slate Navy):** Used for headers and high-level navigation to ensure the UI feels grounded.
- **Background (Slate):** The #F8FAFC base provides a cool, slightly clinical but soft foundation that reduces eye strain compared to pure white.
- **Functional Colors:** Clear, high-chroma red and amber are reserved strictly for medical alerts and critical data points.

## Typography
**Be Vietnam Pro** is selected for its exceptional legibility and modern character. As the platform serves a Vietnamese audience, the font's native support for complex diacritics is essential.

To maintain medical clarity:
- **Line Height:** A generous 1.6x ratio for body text ensures that Vietnamese tonal marks do not overlap between lines.
- **Hierarchy:** Use bold weights (700) sparingly for headlines and semi-bold (600) for interactive labels.
- **Readability:** Body text should never drop below 16px for patient-facing information to ensure accessibility for all age groups.

## Layout & Spacing
The layout follows a **8px soft-grid system**, ensuring all dimensions, padding, and margins are multiples of 8. This creates a rhythmic, predictable structure that reinforces the "precise" brand nature.

- **Grid Model:** 12-column fluid grid for desktop; 4-column grid for mobile.
- **Margins:** 40px on desktop to allow the content to breathe; 16px on mobile to maximize screen real estate for data-heavy medical charts.
- **Content Density:** Maintain "High Breathability." Components should have ample internal padding (minimum 16px) to avoid a cramped, "urgent" feel, instead promoting a calm user experience.

## Elevation & Depth
In line with the **Flat and Clean** style, depth is conveyed through **Tonal Layers** rather than heavy shadows.

- **Base Layer:** The #F8FAFC background.
- **Surface Layer:** White (#FFFFFF) cards are used to group information.
- **Outlines:** Use subtle 1px borders in Slate-200 (#E2E8F0) to define containers. 
- **Shadows:** Avoid shadows on standard cards. Reserve a single "Focus Shadow" (low-opacity, highly diffused emerald tint) for active states or elevated modals to simulate the element lifting slightly toward the user.

## Shapes
The shape language is defined by **Friendly Rigor**. 

A consistent **16px (rounded-lg)** corner radius is applied to all primary containers, cards, and buttons. This significant rounding softens the "clinical" edge of the medical data, making the platform feel more like a lifestyle wellness companion. Smaller elements like tags or checkboxes should use a 4px (soft) radius to maintain internal structural integrity.

## Components
- **Buttons:** Primary buttons use a solid Emerald (#059669) fill with white text. They feature a 16px radius and height of 48px for easy "tappability" on mobile.
- **Input Fields:** Use a white background with a Slate-200 border. On focus, the border transitions to Emerald with a 2px width. Labels are always persistent (never placeholder-only) for accessibility.
- **Cards:** White background, 1px Slate-200 border, 16px border radius. No shadow. Used for medical records, appointment summaries, and health tips.
- **Chips/Tags:** Used for medical categories (e.g., "Blood Test," "Cardiology"). These should have a subtle Emerald-50 background and Emerald-700 text.
- **Lists:** Clean rows separated by 1px Slate-100 dividers, with 16px vertical padding to ensure high legibility of patient data.
- **Data Visualizations:** Charts should use the Primary Emerald and Secondary Navy, with Tertiary Blue for comparative data, ensuring a cohesive look even when displaying complex health metrics.