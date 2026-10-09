# Ezeani Properties — Website Colour Palette

Light & dark mode colour system built from the Ezeani Properties logo.
Every text/background pairing listed here meets **WCAG 2.1 AA** (4.5:1 or higher for body text).

---

## 1. Core Brand Colours

These are taken directly from the logo. Everything else is built around them.

| Name | Hex | RGB | Role |
|---|---|---|---|
| **Ezeani Plum** | `#34073E` | 52, 7, 62 | Primary brand colour — logo background, dark sections, headings |
| **Royal Lilac** | `#B462E8` | 180, 98, 232 | Crown colour — highlights, icons, dark-mode buttons |
| **Crown Violet** | `#9A48C8` | 154, 72, 200 | Crown shadow side — secondary accent, gradients of the mark |
| **Door Green** | `#8DC63F` | 141, 198, 63 | Door colour — call-to-action accent, badges, success moments |
| **White** | `#FFFFFF` | 255, 255, 255 | Logo wordmark, text on dark |

**Usage ratio (recommended):** about 60% neutrals / backgrounds · 30% plum & lilac · 10% green.
Green is the "spark": keep it for key actions and small highlights so it stays special.

---

## 2. Full Colour Scales

### Purple (Plum → Lilac)

| Token | Hex | Notes |
|---|---|---|
| `purple-50` | `#F7F2FA` | Lightest tint, soft section backgrounds |
| `purple-100` | `#EEE3F5` | Hover backgrounds, tags (light) |
| `purple-200` | `#E3D3EC` | Borders on light mode |
| `purple-300` | `#D4A3F5` | Links on dark mode |
| `purple-400` | `#C584EF` | Dark-mode button hover |
| `purple-500` | `#B462E8` | **Royal Lilac (brand)** |
| `purple-600` | `#9A48C8` | **Crown Violet (brand)** |
| `purple-700` | `#7A2FB0` | Light-mode primary buttons & links |
| `purple-800` | `#5A1A80` | Light-mode button hover |
| `purple-900` | `#34073E` | **Ezeani Plum (brand)** |
| `purple-950` | `#1E0424` | Dark-mode page background |

### Green (Door Green)

| Token | Hex | Notes |
|---|---|---|
| `green-50` | `#F4FAEA` | Success background (light) |
| `green-100` | `#E5F3CC` | Badge background (light) |
| `green-200` | `#CDE79E` | |
| `green-300` | `#B2D96E` | Success text (dark mode) |
| `green-400` | `#9ECF52` | Accent button hover |
| `green-500` | `#8DC63F` | **Door Green (brand)** |
| `green-600` | `#72A52C` | Pressed state |
| `green-700` | `#578021` | |
| `green-800` | `#3F5D19` | Success text (light mode) |
| `green-900` | `#2A3E12` | Success background (dark mode) |

### Neutrals (plum-tinted greys)

These greys carry a slight purple tint so they sit naturally with the brand instead of looking cold.

| Token | Hex | Notes |
|---|---|---|
| `neutral-0` | `#FFFFFF` | Cards (light) |
| `neutral-50` | `#FAF7FC` | Page background (light) |
| `neutral-100` | `#F2EDF5` | Alternate sections (light) |
| `neutral-200` | `#E4DCE9` | Borders, dividers (light) |
| `neutral-300` | `#CDBAD6` | Muted text (dark mode) |
| `neutral-400` | `#A898B0` | Placeholder / subtle text (dark) |
| `neutral-500` | `#7D6C86` | Subtle text, captions (light) |
| `neutral-600` | `#5E4A66` | Muted body text (light) |
| `neutral-700` | `#44334B` | Borders (dark) |
| `neutral-800` | `#2C1F31` | |
| `neutral-900` | `#1F0A26` | Main body text (light) |
| `neutral-950` | `#12061A` | Deepest shade, footers |

### Status Colours

| Purpose | Light mode text | Light mode bg | Dark mode text | Dark mode bg |
|---|---|---|---|---|
| Success | `#3F5D19` | `#F4FAEA` | `#B2D96E` | `#2A3E12` |
| Warning | `#8A5A00` | `#FFF6E0` | `#F5B942` | `#3D2A05` |
| Error | `#B42323` | `#FDECEC` | `#F47C7C` | `#3F0D12` |
| Info | `#1F5E99` | `#EAF3FC` | `#7DB8EE` | `#0D2640` |

---

## 3. Light Mode

| Token | Hex | Used for |
|---|---|---|
| `--bg` | `#FAF7FC` | Page background |
| `--bg-alt` | `#F2EDF5` | Alternate sections, stripes |
| `--surface` | `#FFFFFF` | Cards, modals, navbar |
| `--surface-brand` | `#34073E` | Hero, feature bands, footer |
| `--border` | `#E4DCE9` | Card borders, dividers, inputs |
| `--border-strong` | `#CDBAD6` | Input hover, active outlines |
| `--text` | `#1F0A26` | Body text |
| `--text-heading` | `#34073E` | Headings |
| `--text-muted` | `#5E4A66` | Descriptions, secondary text |
| `--text-subtle` | `#7D6C86` | Captions, meta (14px+) |
| `--text-on-brand` | `#FFFFFF` | Text on plum sections |
| `--primary` | `#7A2FB0` | Primary buttons, active nav |
| `--primary-hover` | `#5A1A80` | Primary button hover |
| `--primary-text` | `#FFFFFF` | Text on primary buttons |
| `--primary-soft` | `#EEE3F5` | Tags, selected chips |
| `--accent` | `#8DC63F` | CTA buttons ("Book Inspection"), badges |
| `--accent-hover` | `#9ECF52` | CTA hover |
| `--accent-text` | `#34073E` | Text on green buttons (never white) |
| `--link` | `#7A2FB0` | Links |
| `--link-hover` | `#34073E` | Link hover |
| `--focus-ring` | `#B462E8` | Keyboard focus outline |

**Contrast checks (light):** body text 17.5:1 · headings 15.9:1 · muted 7.5:1 · subtle 4.5:1 · white on primary 7.3:1 · plum on green 8.3:1 · links 6.9:1.

---

## 4. Dark Mode

| Token | Hex | Used for |
|---|---|---|
| `--bg` | `#1E0424` | Page background |
| `--bg-alt` | `#2A0631` | Alternate sections |
| `--surface` | `#34073E` | Cards, navbar, modals (brand plum) |
| `--surface-raised` | `#431050` | Hovered cards, dropdowns |
| `--surface-brand` | `#34073E` | Feature bands (add a lilac border to separate from cards) |
| `--border` | `#44334B` | Card borders, dividers |
| `--border-strong` | `#5A1A80` | Input hover, active outlines |
| `--text` | `#F7F2FA` | Body text |
| `--text-heading` | `#FFFFFF` | Headings |
| `--text-muted` | `#CDBAD6` | Descriptions, secondary text |
| `--text-subtle` | `#A898B0` | Captions, meta |
| `--text-on-brand` | `#FFFFFF` | Text on plum sections |
| `--primary` | `#B462E8` | Primary buttons, active nav |
| `--primary-hover` | `#C584EF` | Primary button hover |
| `--primary-text` | `#1E0424` | Text on primary buttons (dark text, not white) |
| `--primary-soft` | `#431050` | Tags, selected chips |
| `--accent` | `#8DC63F` | CTA buttons, badges |
| `--accent-hover` | `#9ECF52` | CTA hover |
| `--accent-text` | `#1E0424` | Text on green buttons |
| `--link` | `#D4A3F5` | Links |
| `--link-hover` | `#FFFFFF` | Link hover |
| `--focus-ring` | `#8DC63F` | Keyboard focus outline |

**Contrast checks (dark):** body text 17.3:1 · muted 10.6:1 · subtle 7.1:1 · dark text on lilac button 5.3:1 · dark text on green 9.4:1 · links 9.4:1.

---

## 5. Ready-to-use CSS

```css
:root {
  /* Brand */
  --brand-plum: #34073E;
  --brand-lilac: #B462E8;
  --brand-violet: #9A48C8;
  --brand-green: #8DC63F;

  /* Light mode (default) */
  --bg: #FAF7FC;
  --bg-alt: #F2EDF5;
  --surface: #FFFFFF;
  --surface-raised: #FFFFFF;
  --surface-brand: #34073E;
  --border: #E4DCE9;
  --border-strong: #CDBAD6;

  --text: #1F0A26;
  --text-heading: #34073E;
  --text-muted: #5E4A66;
  --text-subtle: #7D6C86;
  --text-on-brand: #FFFFFF;

  --primary: #7A2FB0;
  --primary-hover: #5A1A80;
  --primary-text: #FFFFFF;
  --primary-soft: #EEE3F5;

  --accent: #8DC63F;
  --accent-hover: #9ECF52;
  --accent-text: #34073E;

  --link: #7A2FB0;
  --link-hover: #34073E;
  --focus-ring: #B462E8;

  --success: #3F5D19;  --success-bg: #F4FAEA;
  --warning: #8A5A00;  --warning-bg: #FFF6E0;
  --error:   #B42323;  --error-bg:   #FDECEC;
  --info:    #1F5E99;  --info-bg:    #EAF3FC;

  --shadow: 0 8px 24px rgba(52, 7, 62, 0.08);
}

/* Dark mode: follows the device setting unless the user picked light */
/* Dark mode applies when the user picks dark (data-theme="dark"),
   or when their device is set to dark and they haven't picked light */
[data-theme="dark"] {
  --bg: #1E0424;
  --bg-alt: #2A0631;
  --surface: #34073E;
  --surface-raised: #431050;
  --surface-brand: #34073E;
  --border: #44334B;
  --border-strong: #5A1A80;

  --text: #F7F2FA;
  --text-heading: #FFFFFF;
  --text-muted: #CDBAD6;
  --text-subtle: #A898B0;
  --text-on-brand: #FFFFFF;

  --primary: #B462E8;
  --primary-hover: #C584EF;
  --primary-text: #1E0424;
  --primary-soft: #431050;

  --accent: #8DC63F;
  --accent-hover: #9ECF52;
  --accent-text: #1E0424;

  --link: #D4A3F5;
  --link-hover: #FFFFFF;
  --focus-ring: #8DC63F;

  --success: #B2D96E;  --success-bg: #2A3E12;
  --warning: #F5B942;  --warning-bg: #3D2A05;
  --error:   #F47C7C;  --error-bg:   #3F0D12;
  --info:    #7DB8EE;  --info-bg:    #0D2640;

  --shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #1E0424;  --bg-alt: #2A0631;
    --surface: #34073E;  --surface-raised: #431050;  --surface-brand: #34073E;
    --border: #44334B;  --border-strong: #5A1A80;
    --text: #F7F2FA;  --text-heading: #FFFFFF;  --text-muted: #CDBAD6;
    --text-subtle: #A898B0;  --text-on-brand: #FFFFFF;
    --primary: #B462E8;  --primary-hover: #C584EF;  --primary-text: #1E0424;  --primary-soft: #431050;
    --accent: #8DC63F;  --accent-hover: #9ECF52;  --accent-text: #1E0424;
    --link: #D4A3F5;  --link-hover: #FFFFFF;  --focus-ring: #8DC63F;
    --success: #B2D96E;  --success-bg: #2A3E12;
    --warning: #F5B942;  --warning-bg: #3D2A05;
    --error:   #F47C7C;  --error-bg:   #3F0D12;
    --info:    #7DB8EE;  --info-bg:    #0D2640;
    --shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }
}
```

> The site follows the visitor's phone or computer setting by default. A light/dark toggle sets `data-theme="light"` or `data-theme="dark"` on `<html>` to override it.

---

## 6. Tailwind CSS Config

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F7F2FA', 100: '#EEE3F5', 200: '#E3D3EC', 300: '#D4A3F5',
          400: '#C584EF', 500: '#B462E8', 600: '#9A48C8', 700: '#7A2FB0',
          800: '#5A1A80', 900: '#34073E', 950: '#1E0424',
        },
        green: {
          50: '#F4FAEA', 100: '#E5F3CC', 200: '#CDE79E', 300: '#B2D96E',
          400: '#9ECF52', 500: '#8DC63F', 600: '#72A52C', 700: '#578021',
          800: '#3F5D19', 900: '#2A3E12',
        },
        neutral: {
          0: '#FFFFFF', 50: '#FAF7FC', 100: '#F2EDF5', 200: '#E4DCE9',
          300: '#CDBAD6', 400: '#A898B0', 500: '#7D6C86', 600: '#5E4A66',
          700: '#44334B', 800: '#2C1F31', 900: '#1F0A26', 950: '#12061A',
        },
        brand: {
          plum: '#34073E', lilac: '#B462E8', violet: '#9A48C8', green: '#8DC63F',
        },
      },
    },
  },
};
```

---

## 7. Usage Rules

**Do**
- Use **Ezeani Plum `#34073E`** for hero sections, the footer and feature bands, in both modes.
- Use **Door Green `#8DC63F`** for the single most important action on a screen ("Book an Inspection", "Chat on WhatsApp").
- Always put **dark text** (`#34073E` / `#1E0424`) on green, never white.
- In dark mode, put **dark text** on lilac buttons, not white.
- Place the full-colour logo on plum or dark backgrounds; on light backgrounds use the logo with the wordmark in plum.

**Don't**
- Don't use lilac `#B462E8` for small body text on light backgrounds (too low contrast). Use `#7A2FB0` instead.
- Don't use green for large background areas; it loses its impact.
- Don't use pure black `#000000`. Use `#1E0424` or `#12061A` so the darks stay on brand.
- Don't place lilac and green side by side as text colours. They clash at small sizes.

---

## 8. Quick Reference

| | Light mode | Dark mode |
|---|---|---|
| Background | `#FAF7FC` | `#1E0424` |
| Card | `#FFFFFF` | `#34073E` |
| Border | `#E4DCE9` | `#44334B` |
| Body text | `#1F0A26` | `#F7F2FA` |
| Heading | `#34073E` | `#FFFFFF` |
| Muted text | `#5E4A66` | `#CDBAD6` |
| Primary button | `#7A2FB0` + white text | `#B462E8` + `#1E0424` text |
| CTA button | `#8DC63F` + `#34073E` text | `#8DC63F` + `#1E0424` text |
| Link | `#7A2FB0` | `#D4A3F5` |
| Focus ring | `#B462E8` | `#8DC63F` |
