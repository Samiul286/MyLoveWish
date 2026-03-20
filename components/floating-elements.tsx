"use client"

import { useEffect, useState } from "react"

interface FloatingElementsProps {
  isDoorOpen: boolean
}

const flowers = ["🌸", "🌺", "🌷", "🌹", "💮", "🏵️", "🪻", "🪷"]
const petals = ["🌸", "💗", "💖", "💕"]

export function FloatingElements({ isDoorOpen }: FloatingElementsProps) {
  const [elements, setElements] = useState<Array<{
    id: number
    emoji: string
    left: number
    delay: number
    duration: number
    size: number
  }>>([])

  useEffect(() => {
    // Generate floating flowers
    const flowerElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      emoji: flowers[Math.floor(Math.random() * flowers.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      size: 1 + Math.random() * 1.5,
    }))
    setElements(flowerElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating flowers */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float-up"
          style={{
            left: `${el.left}%`,
            bottom: "-50px",
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            fontSize: `${el.size}rem`,
            opacity: 0.7,
          }}
        >
          {el.emoji}
        </div>
      ))}

      {/* Extra petals when door opens */}
      {isDoorOpen && (
        <>
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`petal-${i}`}
              className="absolute animate-petal-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                fontSize: `${0.8 + Math.random() * 0.8}rem`,
              }}
            >
              {petals[Math.floor(Math.random() * petals.length)]}
            </div>
          ))}
        </>
      )}

      {/* Corner floral decorations */}
      <div className="absolute top-4 left-4 text-4xl md:text-6xl opacity-30 animate-sway">🌸</div>
      <div className="absolute top-4 right-4 text-4xl md:text-6xl opacity-30 animate-sway-delayed">🌺</div>
      <div className="absolute bottom-4 left-4 text-4xl md:text-6xl opacity-30 animate-sway">🌷</div>
      <div className="absolute bottom-4 right-4 text-4xl md:text-6xl opacity-30 animate-sway-delayed">🌹</div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-200 rounded-full blur-sm animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-200 rounded-full blur-sm animate-pulse opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-amber-200 rounded-full blur-sm animate-pulse opacity-60" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-rose-200 rounded-full blur-sm animate-pulse opacity-60" style={{ animationDelay: "0.5s" }} />
    </div>
  )
}
