# Divider

React implementation of the **Divider** component from the i1 Design System (Figma node 2037:30831).

## Design Tokens

| Token | Value |
|-------|-------|
| Font | Mulish 12/15 Regular |
| Width | 244px |
| Height (First/Next) | 21px |
| Height (Line) | 1px |
| Text color | `#86888a` |
| Border color | `#323639` |
| Main menu padding | 40px left, 12px right |
| Context menu padding | 12px left/right |

## Usage

```tsx
import { Divider } from "./components/Divider";

// First label in main menu (no top border)
<Divider label="Content" type="First" location="Main menu" />

// Subsequent label in main menu (top border)
<Divider label="Content" type="Next" location="Main menu" />

// Simple line in context menu
<Divider type="Line" location="Context menu" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"Label"` | Text label (ignored when `type="Line"`) |
| `type` | `"First" \| "Next" \| "Line"` | `"First"` | Visual type |
| `location` | `"Main menu" \| "Context menu"` | `"Main menu"` | Padding variant |
| `className` | `string` | `""` | Extra CSS class |
