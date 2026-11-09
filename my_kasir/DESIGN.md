---
name: My Kasir
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
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
  tertiary: '#0058be'
  on-tertiary: '#ffffff'
  tertiary-container: '#2170e4'
  on-tertiary-container: '#fefcff'
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
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  currency-display:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  currency-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  currency-md:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-sm: 0.75rem
  margin: 1rem
  margin-tablet: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system embodies a modern, pragmatic, and approachable aesthetic built specifically for Indonesian retail entrepreneurs and MSMEs (UMKM). It merges the operational speed of modern point-of-sale systems with the dependable authority of financial record-keeping tools. 

### Visual Philosophy
- **Style Direction:** Modern Functionalism infused with Soft Tactility. Interfaces prioritize high scan-speed, tactile touch targets suitable for fast-paced checkout counters, and clear distinction between data display and interactive triggers.
- **Personality:** Dependable, clear, encouraging, and unencumbered by unnecessary decoration.
- **Emotional Response:** Inspires confidence during high-volume checkout rushes, peace of mind regarding cash/inventory balance, and total transparency around data synchronization.

## Colors

The palette relies on financial stability, high contrast readability under diverse retail lighting conditions, and clear semantic signifiers.

### Roles & Applications
- **Primary (`#059669` / Forest Emerald):** The foundational brand color representing successful transactions, balance confirmation, primary actions ('Bayar', 'Simpan'), and confirmed sync states.
- **Secondary (`#0F172A` / Deep Slate Navy):** The core ground for high-emphasis typography, critical transaction values, navigation foundations, and active touch indicators.
- **Tertiary (`#3B82F6` / Vibrant Metric Blue):** Reserved for analytical metrics, live chart lines, stock monitoring callouts, and informational prompts.
- **Accent Warning (`#F59E0B` / Amber Gold):** Signals pending offline queues, stock replenishment warnings, and unsaved changes.
- **Canvas & Surface:** Built on pure white (`#FFFFFF`) for elevated interactive cards and clean off-white (`#F8FAFC`) for structural page backgrounds to prevent screen glare during long shifts.
- **Data Color Accessibility:** Green (`#10B981` / `#059669`) is systematically paired with directional iconography (e.g., arrow-up, checkmark) so profit and positive cashflow indicators do not rely on color alone.

## Typography

The type system pairs **Plus Jakarta Sans** for interfaces, headings, and instructional copy with **JetBrains Mono** for all numerical and monetary expressions.

### Application Rules
- **Monetary Distinction:** Indonesian Rupiah amounts (e.g., `Rp 45.000`) always render in the dedicated monospaced styles (`currency-*`). This aligns digit columns seamlessly in cash registers, receipts, and inventory audit logs.
- **Rupiah Formatting:** The `Rp` prefix must maintain a non-breaking space before the value. Currency symbols sit at 80% opacity relative to the primary integer value to emphasize the actual figure.
- **Hierarchy Enforcement:** Section titles use `headline-sm` or `headline-md` with semi-bold weights to maintain rapid visual scanning while keeping headers compact on smaller mobile viewports.

## Layout & Spacing

The system follows a 4px baseline sub-grid combined with an 8px structural step. 

### Grid & Density
- **Mobile First (Breakpoint < 640px):** Single-column layout for transaction flows; 2-column card layouts for visual catalog picking. Canvas margin is locked to 16px (`1rem`) to maximize usable horizontal space on handheld POS devices.
- **Tablet / Countertop (Breakpoint 640px - 1024px):** Split-view operational mode. Left area uses a 7-column fluid catalog grid, and right side anchors a fixed 380px digital till/receipt drawer. Margins expand to 24px (`1.5rem`).
- **Touch Targets:** Interactive checkout elements maintain a minimum hit boundary of 48px height to facilitate swift finger-driven input without touch collisions during peak retail hours.

## Elevation & Depth

Visual hierarchy uses clean tonal layering paired with soft, tinted ambient shadows rather than harsh physical skeuomorphism.

### Depth Levels
- **Level 0 (Surface Base):** Canvas background (`#F8FAFC`). Flat, un-elevated.
- **Level 1 (Card & Content Blocks):** Pure white container (`#FFFFFF`) framed with a subtle 1px border (`#E2E8F0`). Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Active Modals, Bottom Sheets & Sticky Banners):** Shadow: `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Cart Sticky Drawer & Floating Action Triggers):** Shadow: `0 20px 25px -5px rgba(5, 150, 105, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`. Elevated surfaces carry a faint emerald tint to emphasize positive transaction capability.

## Shapes

The design system implements a rounded geometry (`roundedness: 2`, base radius 8px) that balances professional discipline with an accessible, friendly touch.

### Application Standards
- **Standard Controls & Cards:** Base radius of `8px` (`0.5rem`) for form inputs, quantity steppers, product grid tiles, and list containers.
- **Large Containers & Drawers:** `16px` (`1rem`) applied to bottom sheets, modal dialogs, and high-level summary cards (`rounded-lg`).
- **Pills & Badges:** Fully rounded (`9999px`) reserved specifically for contextual badges (e.g., status, category tags) and primary circular action toggles.

## Components

### Buttons
- **Primary Action (e.g., 'Bayar Sekarang'):** Solid forest emerald (`#059669`), white text, bold weight, height 48px. Uses Level 1 elevation with subtle emerald glow on hover/press.
- **Secondary Action:** Transparent background with 1.5px border (`#CBD5E1`) and slate navy text (`#0F172A`).
- **Numpad Trigger:** High-contrast slate buttons with prominent monospaced characters, minimum dimension 56px x 56px for error-free cash input.

### Status Badges & Sync Chips
- **Spreadsheet Sync (`Tersinkron ke Spreadsheet`):** Pill-shaped container with soft emerald background (`#ECFDF5`), deep forest text (`#047857`), and a pulsing sync indicator icon.
- **Offline / Sync Queue:** Pill-shaped amber background (`#FFFBEB`), warm gold text (`#B45309`), with offline cloud icon.

### Form Inputs & Currency Fields
- **Standard Input:** Crisp white surface with `#E2E8F0` border, transitions to `#059669` outline on focus.
- **Cash Received Field:** Prominently sized input holding the fixed `Rp` indicator anchored on the left in muted slate (`#94A3B8`), input digits rendered dynamically in `JetBrains Mono`.

### Lists & Inventory Line Items
- Clean table/list rows separated by `#F1F5F9` dividers. Every item row contains item name, stock counter chip, unit price, and a quick-tap +/- stepper.

### Streamlined Bottom Navigation
- Fixed 64px mobile dock housing 4 core anchors: **Kasir (POS)**, **Transaksi**, **Produk/Stok**, and **Laporan**. Active state indicated by deep emerald glyph alongside a 4px circular indicator dot underneath.

### Fast POS Summary Drawer
- Sticky bottom summary sheet displaying total item count, tax/diskon summary, and dynamic final aggregate with one-tap payment expansion.