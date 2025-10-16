# PodPal Project Plan - Simplified Architecture

## Project Vision
A 3D Tamagotchi-style virtual pet game where pets live in customizable rooms. Room conditions affect pet well-being, and pets develop unique personalities based on player care.

---

## Core Architecture

### Technology Stack
- **Runtime**: Bun
- **Frontend**: React + React Three Fiber (R3F)
- **State Management**: Zustand
- **3D Helpers**: @react-three/drei
- **Styling**: Inline styles or minimal CSS (no Tailwind overhead)

### Simplified Structure
```
App
├── PetStore (Zustand) - Pet stats, personality, needs
├── RoomStore (Zustand) - Placed items, room conditions
├── GameStore (Zustand) - Time, save/load, unlocks
├── Canvas (R3F)
│   ├── Pet (3D model + animations)
│   ├── Room (environment mesh)
│   └── Items (decorations, furniture)
└── UI (HTML overlay)
    ├── StatsPanel (hunger, happiness, health)
    ├── ActionBar (feed, play, clean, shop)
    └── Inventory/Shop
```

---

## Phase 1: MVP Foundation (Week 1-2)

### Goal: Basic pet that exists and needs care

#### 1.1 State Management Setup
- [ ] Create `src/stores/petStore.ts`
  - Pet stats: hunger (0-100), happiness (0-100), health (0-100)
  - Basic personality traits (placeholder for now)
  - Last interaction timestamp
  - Actions: feed(), play(), clean()

- [ ] Create `src/stores/gameStore.ts`
  - Current time/game clock
  - Save/load functions (localStorage)
  - Pause state

#### 1.2 Basic 3D Scene
- [ ] Simple 3D pet model (cube or basic shape to start)
- [ ] Basic room environment (floor + walls)
- [ ] Camera setup (orbital controls)
- [ ] Lighting (ambient + directional)

#### 1.3 Core Game Loop
- [ ] Time system that ticks every second
- [ ] Stats decay over time (hunger decreases, etc.)
- [ ] Update pet visual state based on stats

#### 1.4 Basic UI
- [ ] Stats display (3 bars: hunger, happiness, health)
- [ ] Action buttons: Feed, Play, Clean
- [ ] Wire buttons to store actions

**Deliverable**: Pet that gets hungry, responds to feeding, and displays stats

---

## Phase 2: Room System (Week 3)

### Goal: Rooms affect pet stats

#### 2.1 Room State
- [ ] Create `src/stores/roomStore.ts`
  - Room cleanliness (0-100)
  - Placed items array: `{ id, type, position, rotation }`
  - Room effects calculator

#### 2.2 Room Conditions
- [ ] Cleanliness affects health
- [ ] Calculate room stats from placed items
- [ ] Visual indicators for room condition

#### 2.3 Item Placement
- [ ] Click-to-place system for items
- [ ] Snap to grid or free placement
- [ ] Remove/move placed items
- [ ] Save/load placed items

#### 2.4 Item Effects
- [ ] Define item types: decoration, toy, food bowl, bed
- [ ] Items provide passive bonuses (comfort, entertainment)
- [ ] Create 5-10 basic items

**Deliverable**: Room that can be decorated and affects pet well-being

---

## Phase 3: Personality & Interactions (Week 4)

### Goal: Pets develop unique personalities

#### 3.1 Personality System
- [ ] Personality traits: playful, lazy, picky, adventurous, etc.
- [ ] Traits start neutral and shift based on player actions
- [ ] Track interaction history (what foods, which toys)

#### 3.2 Pet Preferences
- [ ] Food preferences develop over time
- [ ] Favorite activities emerge
- [ ] Reactions based on personality (happy/neutral/dislike)

#### 3.3 Pet Animations
- [ ] Idle animation
- [ ] Eating animation
- [ ] Playing animation
- [ ] Sleeping animation
- [ ] Sad/sick animation

#### 3.4 Dynamic Responses
- [ ] Pet reacts differently based on mood
- [ ] Visual feedback for likes/dislikes
- [ ] Sound effects (optional, low priority)

**Deliverable**: Pet that feels alive with unique personality

---

## Phase 4: Content & Progression (Week 5-6)

### Goal: Things to unlock and work toward

#### 4.1 Currency & Shop
- [ ] Earn coins from interactions/time
- [ ] Shop UI with purchasable items
- [ ] Item categories: food, toys, furniture, decorations

#### 4.2 Item Variety
- [ ] 10+ food types with different effects
- [ ] 10+ toys with different interaction styles
- [ ] 15+ room decorations
- [ ] Furniture sets (bed, chair, shelf, etc.)

#### 4.3 Progression System
- [ ] Level-up system (XP from care)
- [ ] Unlock new items at levels
- [ ] Unlock new rooms/areas (stretch goal)

#### 4.4 Daily Challenges
- [ ] Simple daily tasks (feed 3 times, play for 5 min)
- [ ] Rewards for completing challenges

**Deliverable**: Rewarding progression loop

---

## Phase 5: Polish & Juice (Week 7)

### Goal: Make it feel good to play

#### 5.1 Visual Polish
- [ ] Particle effects (hearts, sparkles, coins)
- [ ] Smooth transitions and animations
- [ ] Better 3D models (replace placeholder pet)
- [ ] Improved lighting and materials

#### 5.2 UI/UX Improvements
- [ ] Responsive layout
- [ ] Tooltips and hints
- [ ] Settings menu
- [ ] Better visual feedback for all actions

#### 5.3 Audio
- [ ] Background music (ambient, chill)
- [ ] Sound effects for actions
- [ ] Pet sounds (chirps, purrs, etc.)

#### 5.4 Save System
- [ ] Auto-save every minute
- [ ] Cloud save (optional, use localStorage first)
- [ ] Export/import save data

**Deliverable**: Polished, juicy gameplay experience

---

## Phase 6: Advanced Features (Week 8+)

### Optional stretch goals after MVP is solid

- [ ] Multiple pets (costs more resources)
- [ ] Pet breeding/eggs
- [ ] Mini-games for earning coins
- [ ] Seasons/events (holidays)
- [ ] Pet achievements/badges
- [ ] Social features (visit friends' rooms)
- [ ] Mobile/touch controls
- [ ] PWA for mobile installation

---

## Technical Debt to Avoid

### ❌ Do NOT Build
- ECS system - use React components
- Physics engine - use simple tweening
- Lua scripting - write game logic in TypeScript
- Complex asset management - use drei hooks
- Advanced dev tools - use React DevTools
- Scene graph abstraction - use R3F directly

### ✅ Keep It Simple
- State in Zustand stores
- 3D rendering with R3F components
- Game logic in React hooks
- Direct component composition
- Build features when needed, not speculatively

---

## File Structure (Proposed)

```
src/
├── App.tsx                   # Main app component
├── index.tsx                 # Entry point
├── stores/
│   ├── petStore.ts           # Pet state and actions
│   ├── roomStore.ts          # Room and items state
│   └── gameStore.ts          # Game meta state
├── components/
│   ├── Canvas3D.tsx          # R3F Canvas wrapper
│   ├── Pet.tsx               # 3D pet component
│   ├── Room.tsx              # 3D room environment
│   ├── PlacedItem.tsx        # Individual room item
│   ├── UI/
│   │   ├── StatsPanel.tsx    # Pet stats display
│   │   ├── ActionBar.tsx     # Action buttons
│   │   ├── Inventory.tsx     # Player inventory
│   │   └── Shop.tsx          # Item shop
│   └── ...
├── hooks/
│   ├── useGameLoop.ts        # Game time/tick logic
│   ├── usePetNeeds.ts        # Pet needs decay logic
│   └── useItemEffects.ts     # Calculate item bonuses
├── data/
│   ├── items.ts              # Item definitions
│   ├── foods.ts              # Food definitions
│   └── constants.ts          # Game constants
└── types/
    └── index.ts              # TypeScript types
```

---

## Success Metrics

### MVP Complete When:
- ✅ Pet requires care to survive
- ✅ Player can feed, play, and clean
- ✅ Room items affect pet stats
- ✅ Pet develops preferences over time
- ✅ Save/load works reliably
- ✅ Fun to play for 10+ minutes

### Launch Ready When:
- ✅ 30+ items to collect
- ✅ Progression feels rewarding
- ✅ Runs smoothly on mid-range devices
- ✅ No major bugs
- ✅ Looks and sounds good
- ✅ Fun to play for hours

---

## Migration Strategy from Current Codebase

### Archive Current Engine
```bash
mkdir archive
mv src/ecs archive/
mv src/scripting archive/
mv src/spawners archive/
mv src/components/devtools archive/
```

### Keep and Refactor
- Basic R3F components (EntityVisual, Environment)
- Asset loading (simplify to just useGLTF/useTexture)
- Any 3D models or textures already created
- Error boundary and basic UI components

### Start Fresh
- All state management (new Zustand stores)
- Game logic (no ECS, pure React/TypeScript)
- UI components (rebuild simpler)

---

## Development Principles

1. **Build features, not frameworks** - Code game mechanics, not abstractions
2. **YAGNI** (You Aren't Gonna Need It) - Only build what's needed now
3. **Incremental complexity** - Start simple, add complexity when proven necessary
4. **Playable at every step** - Every phase should be a working game
5. **Content over systems** - More items/interactions > more architecture

---

## Timeline Summary

| Phase | Duration | Focus |
|-------|----------|-------|
| Phase 1 | 1-2 weeks | MVP pet that needs care |
| Phase 2 | 1 week | Room system and decoration |
| Phase 3 | 1 week | Personality and interactions |
| Phase 4 | 2 weeks | Content and progression |
| Phase 5 | 1 week | Polish and juice |
| Phase 6 | Ongoing | Advanced features |

**Total to MVP**: 4-6 weeks of focused development
**Total to Launch**: 7-10 weeks

---

## Next Steps

1. Review this plan and adjust priorities
2. Archive current over-engineered code
3. Start Phase 1: Create basic pet store and 3D scene
4. Get something playable ASAP
5. Iterate based on what's fun

Remember: **Done is better than perfect.** Ship early, iterate often.
