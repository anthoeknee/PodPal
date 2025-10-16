import { create } from 'zustand'
import type { PetState } from '../types'

export const usePetStore = create<PetState>((set) => ({
  hunger: 80,
  happiness: 80,
  health: 100,
  actions: {
    feed: () =>
      set((state) => ({ hunger: Math.min(state.hunger + 20, 100) })),
    play: () =>
      set((state) => ({ happiness: Math.min(state.happiness + 15, 100) })),
    clean: () => {
      console.log('clean action placeholder')
    },
    decayStats: () =>
      set((state) => ({
        hunger: Math.max(state.hunger - 1, 0),
        happiness: Math.max(state.happiness - 2, 0),
      })),
  },
}))
