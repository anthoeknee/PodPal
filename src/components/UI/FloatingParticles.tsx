import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  emoji: string
  delay: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const emojis = ['✨', '💫', '⭐', '🌟', '💖', '🎵', '🦋', '🌸', '🍀']
    const newParticles: Particle[] = []

    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        emoji: emojis[Math.floor(Math.random() * emojis.length)] || '✨',
        delay: Math.random() * 5
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl opacity-30 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  )
}
