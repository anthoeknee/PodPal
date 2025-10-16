import { usePetStore } from '../../stores/petStore'

export default function StatsPanelMinimal() {
  const { petName = 'PodPal', hunger, happiness, health } = usePetStore()

  const getBarColor = (value: number) => {
    if (value > 70) return 'bg-emerald-500'
    if (value > 30) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const stats = [
    { label: 'Hunger', value: hunger, icon: 'i-carbon-restaurant' },
    { label: 'Happy', value: happiness, icon: 'i-carbon-favorite' },
    { label: 'Health', value: health, icon: 'i-carbon-activity' },
  ]

  return (
    <div className="w-full md:w-80">
      {/* Glass Container */}
      <div className="backdrop-blur-lg bg-gray-800/80 rounded-2xl p-4 md:p-6 border border-white/10 shadow-2xl">
        
        {/* Pet Name & Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-white text-xl font-bold tracking-tight">{petName}</h2>
          </div>
          <span className="text-white/60 text-sm">
            {health > 70 ? 'Healthy' : health > 30 ? 'OK' : 'Needs Care'}
          </span>
        </div>

        {/* Stats with Progress Bars */}
        <div className="space-y-4">
          {stats.map(({ label, value, icon }) => (
            <div key={label} className="space-y-2">
              {/* Label Row */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <div className={`${icon} w-4 h-4`} />
                  <span className="font-medium">{label}</span>
                </div>
                <span className="text-white font-semibold">{value}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getBarColor(value)} transition-all duration-500 ease-out rounded-full`}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
