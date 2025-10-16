import { useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'

export function useGameLoop() {
  useEffect(() => {
    const interval = setInterval(() => {
      const { isPaused, actions } = useGameStore.getState()
      if (!isPaused) {
        actions.tick(1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])
}
