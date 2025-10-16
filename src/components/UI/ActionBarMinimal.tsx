import { usePetStore } from '../../stores/petStore'
import { useState } from 'react'

interface ActionBarMinimalProps {
  onToggleShop?: () => void
}

export default function ActionBarMinimal({ onToggleShop }: ActionBarMinimalProps) {
  const { actions } = usePetStore()
  const [activeAction, setActiveAction] = useState<string | null>(null)

  const handleAction = (name: string, fn: () => void) => {
    fn()
    setActiveAction(name)
    setTimeout(() => setActiveAction(null), 300)
  }

  const actionButtons = [
    { 
      name: 'Feed', 
      icon: 'i-carbon-restaurant', 
      action: actions.feed,
      color: 'hover:bg-orange-500/20 active:bg-orange-500/30'
    },
    { 
      name: 'Play', 
      icon: 'i-carbon-game-console', 
      action: actions.play,
      color: 'hover:bg-purple-500/20 active:bg-purple-500/30'
    },
    { 
      name: 'Clean', 
      icon: 'i-carbon-clean', 
      action: actions.clean,
      color: 'hover:bg-blue-500/20 active:bg-blue-500/30'
    },
    { 
      name: 'Shop', 
      icon: 'i-carbon-shopping-cart', 
      action: onToggleShop || (() => {}),
      color: 'hover:bg-teal-500/20 active:bg-teal-500/30'
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="backdrop-blur-lg bg-gray-800/80 rounded-2xl p-3 md:p-4 border border-white/10 shadow-2xl">
        
        {/* Action Buttons */}
        <div className="flex flex-row gap-2 md:gap-3 justify-center items-center">
          {actionButtons.map(({ name, icon, action, color }) => (
            <button
              key={name}
              onClick={() => handleAction(name, action)}
              className={`
                group relative flex-1 max-w-32 md:max-w-none
                flex flex-col items-center justify-center gap-2
                p-3 md:p-4 rounded-xl
                bg-white/5 ${color}
                border border-white/10 hover:border-white/20
                transition-all duration-200 ease-out
                transform hover:scale-105 hover:-translate-y-1
                active:scale-95 active:translate-y-0
                ${activeAction === name ? 'scale-110 -translate-y-2' : ''}
              `}
            >
              {/* Icon */}
              <div className={`${icon} w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-white transition-colors`} />
              
              {/* Label */}
              <span className="text-white text-xs md:text-sm font-medium tracking-tight">
                {name}
              </span>

              {/* Active Feedback */}
              {activeAction === name && (
                <div className="absolute -top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
