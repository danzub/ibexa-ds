# Tooltip

React implementation of the **Tooltip** component from the i1 Design System (Figma node 2421:40320).

## Design Tokens

| Token | Tooltip | Alt |
|-------|---------|-----|
| Background | `#ba2157` | `#ffffff` |
| Text | `#ffffff` | `#0e1216` |
| Border | none | `1px solid #cfd0d0` |
| Shadow | `0 2px 8px rgba(19,28,38,0.15)` | none |
| Arrow | left-pointing (pink) | top-pointing (border + white) |
| Font | Mulish 14/21 Regular | Mulish 14/21 Regular |
| Padding | 4px 12px | 4px 12px |
| Radius | 4px | 4px |

## Usage

```tsx
import { Tooltip } from "./components/Tooltip";

// Default (brand pink tooltip)
<Tooltip label="Dashboard" />

// Alt (white tooltip with border)
<Tooltip label="Label" type="Alt" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"Label"` | Tooltip text |
| `type` | `"Tooltip" \| "Alt"` | `"Tooltip"` | Visual variant |
| `className` | `string` | `""` | Extra CSS class |
