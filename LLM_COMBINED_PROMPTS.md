# PodPal — Combined, Standalone Action Prompts

Each prompt is self‑contained, direct, and actionable. Send them in order; each can be executed independently without prior context.

---

## Prompt 01 — Install Deps, Boot App, and Scaffold Files
Tasks:
- Install dependencies: react, react-dom, three, @react-three/fiber, @react-three/drei, zustand.
- Ensure dev server runs without errors.
- Create these files with minimal stubs that compile: 
  - src/stores/petStore.ts, src/stores/gameStore.ts, src/stores/roomStore.ts
  - src/components/Canvas3D.tsx, src/components/Pet.tsx, src/components/Room.tsx, src/components/PlacedItem.tsx
  - src/components/UI/StatsPanel.tsx, src/components/UI/ActionBar.tsx, src/components/UI/Inventory.tsx, src/components/UI/Shop.tsx
  - src/hooks/useGameLoop.ts, src/hooks/usePetNeeds.ts, src/hooks/useItemEffects.ts
  - src/data/constants.ts, src/data/foods.ts, src/data/items.ts, src/types/index.ts
Commands:
- npm i react react-dom three @react-three/fiber @react-three/drei zustand
- npm run dev
Acceptance:
- Dev server runs clean; all files exist and project compiles without TypeScript errors.

---

## Prompt 02 — Implement Pet and Game Stores with Persistence and Constants
Tasks:
- src/stores/petStore.ts: hunger/happiness/health (0–100), personality placeholder, lastInteractionAt, history[]; actions feed(amount), play(seconds), clean(), applyDelta({hunger,happiness,health}), record(event). Clamp 0–100.
- src/stores/gameStore.ts: state { now, paused, coins:0, xp:0, level:1 }; actions tick(deltaSec), pause(), resume(), addCoins(n), addXP(n), save(), load(); persist to localStorage key podpal-save-v1 with safe JSON parse.
- src/data/constants.ts: initial stats, decay rates/sec, coin/xp gains, autosave interval (60s), level thresholds.
Acceptance:
- Actions update state correctly and clamp values; save()/load() round‑trip reliably without crashing on malformed storage.

---

## Prompt 03 — Game Loop and Needs Decay Integration in App
Tasks:
- src/hooks/useGameLoop.ts: 1Hz timer; if paused do nothing; expose start/stop and cleanup on unmount; call gameStore.tick(1).
- src/hooks/usePetNeeds.ts: on each tick, apply decay from constants and adjust by room/item modifiers; clamp 0–100; no negative overflow.
- Integrate both hooks at App root so ticking begins on mount and respects pause/resume.
Acceptance:
- Stats visibly change over time when app runs; pausing halts decay; no duplicate timers or memory leaks.

---

## Prompt 04 — 3D Scene, Pet Placeholder, and Core UI Wiring
Tasks:
- src/components/Canvas3D.tsx: R3F <Canvas>; ambient and directional lights; <OrbitControls/>; fills container.
- src/components/Room.tsx: floor (Plane) + walls (Boxes); cleanliness subtly alters tint.
- src/components/Pet.tsx: simple Box/Sphere; idle bob animation; color reflects happiness (green→red).
- src/components/UI/StatsPanel.tsx: three live bars (hunger/happiness/health) 0–100.
- src/components/UI/ActionBar.tsx: buttons Feed/Play/Clean wired to petStore actions (Feed uses default food from foods.ts; Play 30s).
- Compose in App: render Canvas3D with Room + Pet; overlay StatsPanel and ActionBar.
Acceptance:
- Pet visible and bobbing; lighting and orbit controls work; buttons update stats; bars reflect in real time.

---

## Prompt 05 — Room Store, Placed Items, and Click‑to‑Place with Persistence
Tasks:
- src/stores/roomStore.ts: cleanliness (0–100), placedItems: {id,type,position:[x,y,z],rotation:[x,y,z]}[]; actions setCleanliness, placeItem, moveItem, removeItem, clearAll.
- src/components/PlacedItem.tsx: render basic meshes from items.ts based on type and transform.
- Implement placement mode: UI toggle to select an item, click floor to place; snap to grid (1 unit); support move/remove; persist placedItems to storage and hydrate on load.
Acceptance:
- User can place/move/remove items; state survives reload; cleanliness and items render correctly.

---

## Prompt 06 — Item Effects and Decay Modifiers
Tasks:
- src/hooks/useItemEffects.ts: aggregate effects from roomStore.placedItems using items.ts (e.g., comfort, entertainment) and expose selectors.
- Integrate modifiers into usePetNeeds: comfort reduces happiness decay; entertainment reduces boredom/happiness decay; ensure deterministic calculations.
- UI: minimal display of current aggregated effects for debugging.
Acceptance:
- Adding/removing items changes computed effects and measurably alters decay rates.

---

## Prompt 07 — Personality, History, Preferences, and Reactions
Tasks:
- Extend petStore: traits { playful, lazy, picky, adventurous } in range −1..1; history logs interactions with timestamps.
- Update actions (feed/play) to nudge traits; disliked outcomes nudge opposite.
- Preferences: derive liked/disliked foods/activities from history (simple frequency‑based top‑k).
- Pet.tsx: brief visual feedback (scale pulse/color flash) for like/neutral/dislike.
Acceptance:
- Repeated actions shift traits gradually; feeding liked food triggers positive reaction; preferences emerge after several interactions.

---

## Prompt 08 — Currency, Inventory, Shop, and Level Progression
Tasks:
- Coins: grant small passive coins via tick and action rewards (constants).
- Inventory.tsx: render owned foods/items; Shop.tsx: list purchasables with prices and level gates; purchase deducts coins and adds to inventory.
- XP/Levels: addXP on care; thresholds from constants; unlock items by level; show level badge + progress bar.
Acceptance:
- Can buy items/foods when sufficient coins and level; inventory updates; level ups unlock new shop entries; all persists across reload.

---

## Prompt 09 — Robust Persistence: Autosave and Export/Import
Tasks:
- On App mount: load saved state across gameStore, petStore, roomStore; reconcile safely with defaults.
- Autosave: every 60s and on visibility change/unload; dedupe timers.
- Export/Import: provide buttons to export current game state JSON and import to restore; validate schema and clamp values; confirm overwrite.
Acceptance:
- Reload restores full state (stats, coins, inventory, placed items, traits); export->import yields identical state; invalid JSON is rejected safely.

---

## Prompt 10 — Basic Juice and QA Pass
Tasks:
- Add lightweight particles (hearts/sparkles) on positive actions using instanced meshes; smooth UI transitions.
- Improve materials/lighting for a nicer look; ensure performance remains smooth.
- QA: 10+ minute playtest covering items placement, shop, progression, save/reload; fix console errors; clean up timers/listeners.
Acceptance:
- Noticeable but performant feedback; no major errors or leaks; meets MVP success metrics from the plan.
