# ModuleItem

React implementation of the **Module item** component from the i1 Design System (Figma node 341:53117).

## Design Tokens

| Token | Value |
|-------|-------|
| Width | 229px |
| Padding | 8px |
| Border radius | 8px |
| Label font | Mulish 14/21 Regular, white |
| Description font | Mulish 12/15 Regular |
| Description (Enabled/Hover/Focus) | `#86888a` |
| Description (Selected) | `#b7b8b9` |
| Background (Enabled) | `#0e1216` |
| Background (Hover) | `rgba(255,255,255,0.05)` |
| Background (Selected) | `#262a2d` |

## Module Variants

| Module | Label | Description | Hover text | Focus border |
|--------|-------|-------------|------------|--------------|
| `Campaigns` | Campaigns | Create & manage campaigns | `#e17414` | `#d66400` |
| `Reward` | Reward programs | Build & manage loyalty portals | `#ffc870` | `#ffc870` |
| `Insights` | Insights | Analyze performances & results | `#76a5f8` | `#76a5f8` |
| `Design` | Design | Manage Brand Kit & templates | `#ab77d4` | `#ba91dd` |
| `Integrations` | Integrations | APIs, webhooks & data flows | `#ea5871` | `#ea5871` |
| `Privacy` | Privacy | Consent, compliance & user rights | `#3de6bf` | `#4cf0ca` |
| `Superadmin` | Superadmin | Qualifio employees only | `#b4cefd` | `#b4cefd` |

## Usage

```tsx
import { ModuleItem } from "./components/ModuleItem";

// Enabled state
<ModuleItem module="Campaigns" state="Enabled" />

// Hover state
<ModuleItem module="Reward" state="Hover" />

// Focus state
<ModuleItem module="Insights" state="Focus" />

// Selected state
<ModuleItem module="Design" state="Selected" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `module` | `ModuleItemType` | `"Campaigns"` | Module variant |
| `state` | `ModuleItemState` | `"Enabled"` | Visual state |
| `className` | `string` | `""` | Extra CSS class |
| `onClick` | `() => void` | — | Click handler |

## States

| State | Appearance |
|-------|------------|
| `Enabled` | Dark bg, white label, tertiary description |
| `Hover` | Subtle white overlay, label tint changes to module color |
| `Focus` | Colored border (module-specific) + focus shadow |
| `Selected` | Slightly lighter bg, secondary description color |
