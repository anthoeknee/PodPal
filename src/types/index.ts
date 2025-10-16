export interface PetActions {
  feed: () => void
  play: () => void
  clean: () => void
  decayStats: () => void
}

export interface PetState {
  petName: string
  hunger: number
  happiness: number
  health: number
  actions: PetActions
}

export interface GameActions {
  updateTick: (timestamp: number) => void
  tick: (deltaSeconds: number) => void
  togglePause: () => void
}

export interface GameState {
  isPaused: boolean
  lastTick: number
  tickCount: number
  actions: GameActions
}
