# MainMenuItemBase

React implementation of the **Main menu — item base** component from the i1 Design System (Figma node 341:51007).

## Design Tokens

| Token | Value |
|-------|-------|
| Font | Mulish 14/21 Regular |
| Height | 40px |
| Padding (Extended) | 12px left/right |
| Radius | 8px |
| Extended width | 240px |
| Collapsed width | 40px |
| Icon size | 20×20px |
| Background (Selected) | `#262a2d` |
| Text (Enabled / Selected) | `#ffffff` |
| Text (Hover) | `#dc5685` |
| Tooltip background | `#ba2157` |
| Tooltip shadow | `0 2px 8px rgba(19,28,38,0.15)` |

## Usage

```tsx
import { MainMenuItemBase } from "./components/MainMenuItemBase";

// Extended, enabled
<MainMenuItemBase label="Dashboard" size="Extended" state="Enabled" />

// Extended, selected
<MainMenuItemBase label="Content" size="Extended" state="Selected" />

// Collapsed, hover with tooltip
<MainMenuItemBase label="Settings" size="Collapsed" state="Hover" tooltipLabel="Settings" />

// Custom icon
<MainMenuItemBase
  icon={<MyCustomIcon />}
  label="Custom"
  size="Extended"
  state="Enabled"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | default menu icon | Custom icon element |
| `label` | `string` | `"Dashboard"` | Display label |
| `tooltipLabel` | `string` | `"Label"` | Tooltip text (collapsed hover) |
| `showChevron` | `boolean` | `true` | Show dropdown chevron |
| `showText` | `boolean` | `true` | Show label text |
| `size` | `"Extended" \| "Collapsed"` | `"Extended"` | Width variant |
| `state` | `"Enabled" \| "Hover" \| "Selected" \| "Opened"` | `"Enabled"` | Visual state |
| `className` | `string` | `""` | Extra CSS class |
| `onClick` | `() => void` | — | Click handler |

## States

- **Enabled**: transparent background, white text/icon
- **Hover**: transparent background, brand-pink (`#dc5685`) text/icon
- **Selected**: dark background (`#262a2d`), white text/icon
- **Opened**: transparent background, white text/icon, purple border (`#391b79`)

## Size Variants

- **Extended** (240px): icon + label + optional chevron
- **Collapsed** (40px): icon only; hover shows tooltip
