# MainMenuSubitem

React implementation of the **Main menu — subitem** component from the i1 Design System (Figma node 341:51915).

## Design Tokens

| Token | Value |
|-------|-------|
| Font | Mulish 14/21 Regular |
| Width | 195px |
| Height | 36px |
| Radius | 8px |
| Icon / Drag | 16×16px |
| Pin button | 20×20px |
| Gap icon→label | 4px |
| Main menu padding | 5px 12px 5px 20px |
| Context menu padding | 5px 12px |
| Focus text padding | 4px |
| Focus border | `1px solid #ba2157` |
| Focus shadow | `0 0 0 4px rgba(186,33,87,0.25)` |

## Usage

```tsx
import { MainMenuSubitem } from "./components/MainMenuSubitem";

// Main menu, enabled
<MainMenuSubitem label="Articles" type="Main menu" location="All" state="Enable" />

// Main menu, selected
<MainMenuSubitem label="Articles" type="Main menu" location="All" state="Selected" />

// Main menu, hover pinned (shows drag handle)
<MainMenuSubitem label="Articles" type="Main menu" location="Pinned" state="Hover pinned" />

// Context menu, hover
<MainMenuSubitem label="Articles" type="Context menu" location="All" state="Hover" />

// Focus text state
<MainMenuSubitem label="Articles" type="Main menu" location="All" state="Focus unpinned text" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"Label"` | Display text |
| `type` | `"Main menu" \| "Context menu"` | `"Main menu"` | Menu type |
| `location` | `"All" \| "False" \| "Pinned"` | `"All"` | Pin location |
| `state` | `SubitemState` | `"Enable"` | Visual state (see below) |
| `className` | `string` | `""` | Extra CSS class |
| `onClick` | `() => void` | — | Click handler |
| `onPinClick` | `() => void` | — | Pin button click |

## States

| State | Text color | Pin visible | Drag handle | Focus ring |
|-------|-----------|-------------|-------------|------------|
| `Enable` | white | hidden | no | — |
| `Hover` | `#e07198` | unpinned | no | — |
| `Hover unpinned` | `#e07198` | unpinned | no | — |
| `Hover pinned` | `#e07198` | pinned | yes | — |
| `Selected` | `#dc5685` | unpinned | no* | — |
| `Focus unpinned text` | white | no | no | text container |
| `Focus unpinned pin` | white | unpinned + focused | no | pin button |
| `Focus pinned text` | white | no | no | text container |
| `Focus pinned pin` | white | pinned + focused | no | pin button |

*Drag handle shown only when `location="False"`.

## Sub-components

### PinButton

```tsx
import { PinButton } from "./components/MainMenuSubitem";

<PinButton type="Unpinned" state="Enable" />
<PinButton type="Pinned" state="Focus" />
```

### DragIcon

```tsx
import { DragIcon } from "./components/MainMenuSubitem";

<DragIcon color="#B7B8B9" />
```
