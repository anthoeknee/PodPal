export interface PetActions {
  feed: () => void
  play: () => void
  clean: () => void
  decayStats: () => void
}

export interface PetState {
  hunger: number
  happiness: number
  health: number
  actions: PetActions
}

export interface GameActions {
  updateTick: (timestamp: number) => void
}

export interface GameState {
  isPaused: boolean
  lastTick: number
  actions: GameActions
}
