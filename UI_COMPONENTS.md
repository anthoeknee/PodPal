# PodPal UI Components Documentation

## Overview
Responsive, minimalist UI components for the PodPal virtual pet game, built exclusively with UnoCSS utility classes.

## Components

### 1. MainLayout
**Location:** `src/components/UI/MainLayout.tsx`

Full-screen container that positions UI elements around a central 3D viewport.

**Props:**
- `children`: Central 3D viewport content
- `statsPanel`: Top stats component (ReactNode)
- `actionBar`: Bottom action bar (ReactNode)
- `shopPanel`: Optional right-side shop panel (ReactNode)

**Layout Structure:**
```
┌─────────────────────────────────┐
│ Stats Panel (top-left)          │ Shop Panel (right)
│                                  │ Desktop: sidebar
├─────────────────────────────────┤ Mobile: overlay
│                                  │
│     3D Viewport (center)         │
│                                  │
├─────────────────────────────────┤
│ Action Bar (bottom, full-width) │
└─────────────────────────────────┘
```

**Responsive Behavior:**
- **Desktop:** Stats at top-left, Shop as right sidebar
- **Mobile:** Stats full-width at top, Shop as full-screen overlay

---

### 2. StatsPanelMinimal
**Location:** `src/components/UI/StatsPanelMinimal.tsx`

Displays pet name, status, and three progress bars (Hunger, Happy, Health).

**Features:**
- Glass morphism backdrop (`backdrop-blur-lg bg-gray-800/80`)
- Carbon icons (`i-carbon-*`)
- Color-coded progress bars (green > 70%, yellow 30-70%, red < 30%)
- Responsive sizing (`w-full md:w-80`)

**UnoCSS Classes Used:**
- Layout: `backdrop-blur-lg`, `rounded-2xl`, `border`, `shadow-2xl`
- Typography: `text-white`, `font-bold`, `tracking-tight`
- Colors: `bg-gray-800/80`, `border-white/10`
- Responsive: `md:w-80`, `md:p-6`
- Animation: `animate-pulse`

---

### 3. ActionBarMinimal
**Location:** `src/components/UI/ActionBarMinimal.tsx`

Row of 4 action buttons (Feed, Play, Clean, Shop).

**Props:**
- `onToggleShop`: Optional callback for shop toggle

**Features:**
- Responsive flex layout (vertical on mobile, horizontal on desktop)
- Hover effects with scale and translate
- Active state animations
- Carbon icons
- Glass morphism design

**UnoCSS Classes Used:**
- Layout: `flex flex-row gap-2 md:gap-3`, `flex-1 max-w-32`
- Interactions: `hover:scale-105 hover:-translate-y-1`, `active:scale-95`
- Colors: `bg-white/5`, `hover:bg-orange-500/20`
- Transitions: `transition-all duration-200 ease-out`

---

### 4. ShopPanel
**Location:** `src/components/UI/ShopPanel.tsx`

Toggleable sidebar/overlay with shop and inventory tabs.

**Props:**
- `isOpen`: Boolean to control visibility
- `onClose`: Callback when close button clicked

**Features:**
- Tab switching (Shop / Inventory)
- Grid layout for item cards (2 columns)
- Coin balance display
- Item cards with icons, names, descriptions, and prices
- Mobile backdrop overlay
- Smooth slide-in animation

**UnoCSS Classes Used:**
- Layout: `grid grid-cols-2 gap-3`, `fixed md:absolute`
- Responsive: `w-full md:w-96`, `inset-y-0 right-0`
- Backdrop: `bg-black/50 backdrop-blur-sm`
- Animations: `transform transition-transform duration-300`
- Cards: `bg-white/5 hover:bg-white/10`, `hover:scale-105`

---

## Usage Example

```tsx
import { useState } from 'react'
import MainLayout from './components/UI/MainLayout'
import StatsPanelMinimal from './components/UI/StatsPanelMinimal'
import ActionBarMinimal from './components/UI/ActionBarMinimal'
import ShopPanel from './components/UI/ShopPanel'
import Canvas3D from './components/Canvas3D'

export default function App() {
  const [isShopOpen, setIsShopOpen] = useState(false)

  return (
    <MainLayout
      statsPanel={<StatsPanelMinimal />}
      actionBar={
        <ActionBarMinimal 
          onToggleShop={() => setIsShopOpen(!isShopOpen)} 
        />
      }
      shopPanel={
        <ShopPanel 
          isOpen={isShopOpen} 
          onClose={() => setIsShopOpen(false)} 
        />
      }
    >
      <Canvas3D />
    </MainLayout>
  )
}
```

---

## Design System

### Color Palette
- **Background:** `bg-gray-800` base, `bg-gray-800/80` glass panels
- **Text:** `text-white` primary, `text-white/60` secondary, `text-white/40` tertiary
- **Borders:** `border-white/10` default, `border-white/20` hover
- **Accents:**
  - Orange: `bg-orange-500/20` (Feed action)
  - Purple: `bg-purple-500/20` (Play action)
  - Blue: `bg-blue-500/20` (Clean action)
  - Teal: `bg-teal-500/20` (Shop action)
  - Yellow: `bg-yellow-500/20` (Coins)
  - Emerald: `bg-emerald-500` (High stat values)
  - Red: `bg-red-500` (Low stat values)

### Typography
- **Headings:** `text-xl md:text-2xl font-bold tracking-tight`
- **Body:** `text-sm font-medium`
- **Captions:** `text-xs text-white/60`

### Spacing
- **Padding:** `p-3 md:p-4` containers, `p-4 md:p-6` panels
- **Gaps:** `gap-2 md:gap-3` flex/grid items

### Effects
- **Glass Morphism:** `backdrop-blur-lg bg-gray-800/80`
- **Shadows:** `shadow-2xl` for depth
- **Borders:** `border border-white/10 rounded-2xl`
- **Hover Scale:** `hover:scale-105 hover:-translate-y-1`
- **Active Scale:** `active:scale-95`

### Icons
Using Carbon Design System icons via UnoCSS preset:
- `i-carbon-restaurant` (Feed)
- `i-carbon-game-console` (Play)
- `i-carbon-clean` (Clean)
- `i-carbon-shopping-cart` (Shop)
- `i-carbon-favorite` (Happiness)
- `i-carbon-activity` (Health)
- `i-carbon-currency` (Coins)
- `i-carbon-close` (Close button)

---

## Responsive Breakpoints

- **Mobile:** Default styles, full-width panels
- **Tablet/Desktop:** `md:` prefix (typically 768px+)
  - Stats panel becomes fixed-width sidebar
  - Shop panel becomes right sidebar
  - Action buttons get more spacing
  - Increased padding on panels

---

## Accessibility Notes

- All buttons have hover/active states
- Color-coded stats with percentage text for clarity
- Icon + text labels on all actions
- Sufficient contrast ratios (white text on dark backgrounds)
- Responsive touch targets (min 44x44px on mobile)

---

## Performance Considerations

- Glass morphism uses `backdrop-blur-lg` (may impact performance on low-end devices)
- Animations use `transform` for GPU acceleration
- Conditional rendering for shop panel (not rendered when closed)
- Smooth transitions with `duration-200` and `duration-300`
