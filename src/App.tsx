import { useState } from 'react'
import Canvas3D from './components/Canvas3D'
import MainLayout from './components/UI/MainLayout'
import StatsPanelMinimal from './components/UI/StatsPanelMinimal'
import ActionBarMinimal from './components/UI/ActionBarMinimal'
import ShopPanel from './components/UI/ShopPanel'
import FloatingParticles from './components/UI/FloatingParticles'
import { useGameLoop } from './hooks/useGameLoop'
import { usePetNeeds } from './hooks/usePetNeeds'
import 'uno.css'

export default function App() {
  useGameLoop()
  usePetNeeds()
  const [isShopOpen, setIsShopOpen] = useState(false)

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      <FloatingParticles />
      
      <MainLayout
        statsPanel={<StatsPanelMinimal />}
        actionBar={<ActionBarMinimal onToggleShop={() => setIsShopOpen(!isShopOpen)} />}
        shopPanel={<ShopPanel isOpen={isShopOpen} onClose={() => setIsShopOpen(false)} />}
      >
        <Canvas3D />
      </MainLayout>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs font-medium pointer-events-none z-10">
        Made with 💖 by Factory AI
      </div>
    </div>
  )
}
