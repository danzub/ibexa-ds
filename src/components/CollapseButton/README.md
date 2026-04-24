# CollapseButton

React implementation of the **Collapse button** component from the i1 Design System (Figma node 3044:27016).

## Design Tokens

| Token | Value |
|-------|-------|
| Font | Mulish 14/21 Regular |
| Full width | 244px |
| Icon width | 36px |
| Height | 32px |
| Text (tertiary) | `#86888a` |
| Text (secondary) | `#b7b8b9` |
| Arrow color | `#6e7173` |
| Focus border | `#ba2157` |
| Focus shadow | `0 0 0 4px rgba(186,33,87,0.25)` |

## Usage

```tsx
import { CollapseButton } from "./components/CollapseButton";

// Full width collapse button
<CollapseButton variant="Collapse" label="Collapse" />

// Collapse with secondary text color
<CollapseButton variant="CollapseSecondary" label="Collapse" />

// Collapse with focus ring
<CollapseButton variant="CollapseFocus" label="Collapse" />

// Icon-only expand button
<CollapseButton variant="Expand" />

// Expand with focus ring
<CollapseButton variant="ExpandFocus" />

// Expand icon with focus padding
<CollapseButton variant="ExpandIconFocus" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `CollapseButtonVariant` | `"Collapse"` | Visual variant |
| `label` | `string` | `"Collapse"` | Label text (collapse variants only) |
| `className` | `string` | `""` | Extra CSS class |
| `onClick` | `() => void` | — | Click handler |

## Variants

| Variant | Width | Content | Focus |
|---------|-------|---------|-------|
| `Collapse` | 244px | arrow left + label | — |
| `CollapseSecondary` | 244px | arrow left + label (secondary color) | — |
| `CollapseFocus` | 244px | arrow left + label | focus ring on button |
| `Expand` | 36px | arrow right icon only | — |
| `ExpandFocus` | 36px | arrow right icon only | focus ring |
| `ExpandIconFocus` | 36px | arrow right icon only | padded focus |
