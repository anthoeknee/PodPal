import Canvas3D from './components/Canvas3D'
import { useGameLoop } from './hooks/useGameLoop'
import { usePetNeeds } from './hooks/usePetNeeds'

export default function App() {
  useGameLoop()
  usePetNeeds()

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas3D />
    </div>
  )
}
