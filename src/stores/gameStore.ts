import { create } from 'zustand'
import type { GameState } from '../types'

export const useGameStore = create<GameState>((set) => ({
  isPaused: false,
  lastTick: Date.now(),
  actions: {
    updateTick: (timestamp: number) => set({ lastTick: timestamp }),
  },
}))
