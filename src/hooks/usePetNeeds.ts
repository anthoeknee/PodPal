import { useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { usePetStore } from '../stores/petStore'

const DECAY_RATES = {
  hunger: 1,
  happiness: 0.5,
  health: 0.3,
}

export function usePetNeeds() {
  const tickCount = useGameStore((state) => state.tickCount)

  useEffect(() => {
    if (tickCount === 0) return

    const { hunger, happiness, health } = usePetStore.getState()

    usePetStore.setState({
      hunger: Math.max(0, Math.min(100, hunger - DECAY_RATES.hunger)),
      happiness: Math.max(0, Math.min(100, happiness - DECAY_RATES.happiness)),
      health: Math.max(0, Math.min(100, health - DECAY_RATES.health)),
    })
  }, [tickCount])
}
