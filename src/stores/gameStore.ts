import { create } from 'zustand'
import type { GameState } from '../types'

export const useGameStore = create<GameState>((set) => ({
  isPaused: false,
  lastTick: Date.now(),
  tickCount: 0,
  actions: {
    updateTick: (timestamp: number) => set({ lastTick: timestamp }),
    tick: (deltaSeconds: number) =>
      set((state) => ({
        tickCount: state.tickCount + deltaSeconds,
        lastTick: Date.now(),
      })),
    togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
  },
}))
