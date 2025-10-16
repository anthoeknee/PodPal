import { useState } from 'react'

interface ShopItem {
  id: string
  name: string
  icon: string
  price: number
  description: string
}

interface ShopPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShopPanel({ isOpen, onClose }: ShopPanelProps) {
  const [activeTab, setActiveTab] = useState<'shop' | 'inventory'>('shop')
  const [coins] = useState(150)

  const shopItems: ShopItem[] = [
    { id: '1', name: 'Premium Food', icon: 'i-carbon-restaurant', price: 50, description: '+30 Hunger' },
    { id: '2', name: 'Toy Ball', icon: 'i-carbon-basketball', price: 30, description: '+20 Happy' },
    { id: '3', name: 'Medicine', icon: 'i-carbon-medication', price: 60, description: '+40 Health' },
    { id: '4', name: 'Treats', icon: 'i-carbon-cookie', price: 20, description: '+10 Hunger +10 Happy' },
    { id: '5', name: 'Grooming Kit', icon: 'i-carbon-cut-out', price: 40, description: '+25 Health' },
    { id: '6', name: 'Music Box', icon: 'i-carbon-music', price: 35, description: '+30 Happy' },
  ]

  const inventoryItems: ShopItem[] = [
    { id: 'inv1', name: 'Ball', icon: 'i-carbon-basketball', price: 0, description: 'Play toy' },
    { id: 'inv2', name: 'Snack', icon: 'i-carbon-cookie', price: 0, description: 'Quick food' },
  ]

  const items = activeTab === 'shop' ? shopItems : inventoryItems

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop - Mobile Only */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <div className={`
        fixed md:absolute inset-y-0 right-0 z-50
        w-full md:w-96 md:h-auto md:inset-auto md:top-4 md:right-4 md:bottom-auto md:max-h-[calc(100vh-2rem)]
        transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <div className="h-full md:h-auto backdrop-blur-lg bg-gray-800/90 md:rounded-2xl border-l md:border border-white/10 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              {activeTab === 'shop' ? 'Shop' : 'Inventory'}
            </h2>
            
            <div className="flex items-center gap-3">
              {/* Coins Display */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                <div className="i-carbon-currency w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">{coins}</span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="i-carbon-close w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10 px-4 md:px-6">
            <button
              onClick={() => setActiveTab('shop')}
              className={`
                flex-1 py-3 text-sm font-medium transition-colors relative
                ${activeTab === 'shop' ? 'text-white' : 'text-white/50 hover:text-white/70'}
              `}
            >
              Shop
              {activeTab === 'shop' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`
                flex-1 py-3 text-sm font-medium transition-colors relative
                ${activeTab === 'inventory' ? 'text-white' : 'text-white/50 hover:text-white/70'}
              `}
            >
              Inventory
              {activeTab === 'inventory' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-400 to-secondary-600" />
              )}
            </button>
          </div>

          {/* Items Grid */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`
                    group relative p-4 rounded-xl
                    bg-white/5 hover:bg-white/10
                    border border-white/10 hover:border-white/20
                    transition-all duration-200
                    transform hover:scale-105 hover:-translate-y-1
                    active:scale-95
                    ${activeTab === 'shop' && item.price > coins ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  disabled={activeTab === 'shop' && item.price > coins}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className={`${item.icon} w-10 h-10 text-white group-hover:scale-110 transition-transform`} />
                  </div>

                  {/* Name */}
                  <h3 className="text-white text-sm font-semibold text-center mb-2 leading-tight">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs text-center mb-3">
                    {item.description}
                  </p>

                  {/* Price or Use Button */}
                  {activeTab === 'shop' ? (
                    <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
                      <div className="i-carbon-currency w-3.5 h-3.5 text-yellow-400" />
                      <span className="text-yellow-400 font-bold text-sm">{item.price}</span>
                    </div>
                  ) : (
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold text-center">
                      Use
                    </div>
                  )}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
              ))}
            </div>

            {/* Empty State */}
            {items.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-white/40">
                <div className="i-carbon-shopping-bag w-16 h-16 mb-4" />
                <p className="text-sm">No items available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
