"use client"

import { useState, useEffect } from "react"
import { Moon, Star, Heart } from "lucide-react"

export function SpecialEidWish() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const messageLines = [
    "As the beautiful crescent moon graces the sky,",
    "My heart is already illuminated by your love. ✨",
    "May this glorious Eid bring you as much joy",
    "As you bring into my life every single day. 🌹",
    "You are my answered prayer, my greatest blessing.",
    "I love you more than words could ever express.",
  ]

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center p-4 sm:p-6 pb-20">
      
      {/* Decorative Moon and Stars */}
      <div className="relative w-full flex justify-center mb-12 animate-float">
        <div className="relative">
          <Moon className="w-24 h-24 sm:w-32 sm:h-32 text-amber-300 drop-shadow-[0_0_20px_rgba(252,211,77,0.8)] fill-amber-200" />
          <Star className="absolute top-2 -left-6 w-8 h-8 sm:w-10 sm:h-10 text-yellow-200 animate-pulse-slow drop-shadow-[0_0_15px_rgba(253,230,138,0.8)] fill-yellow-100" />
          <Star className="absolute top-10 -right-8 w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 animate-pulse-slow drop-shadow-[0_0_15px_rgba(253,224,71,0.8)] fill-yellow-200" style={{ animationDelay: '1s' }} />
          <Star className="absolute -top-4 right-4 w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse-slow drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] fill-white" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-[2rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group">
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-50"></div>
        
        <div className="relative flex flex-col items-center space-y-8 text-center z-10">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 animate-glow-text" style={{ fontFamily: 'var(--font-serif)' }}>
              Eid Mubarak,
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-2 block drop-shadow-lg text-rose-600 dark:text-rose-400" style={{ fontFamily: 'var(--font-serif)' }}>
              Israt My Queen 👑💖
            </h2>
          </div>

          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full opacity-80 animate-pulse-slow"></div>

          <div className="space-y-5 pt-4">
            {messageLines.map((line, index) => (
              <p
                key={index}
                className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-100 animate-fade-in-up drop-shadow-sm"
                style={{ 
                  animationDelay: `${1.5 + index * 0.8}s`,
                  fontFamily: 'var(--font-sans)',
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <div 
            className="pt-10 animate-fade-in-up" 
            style={{ 
              animationDelay: `${1.5 + messageLines.length * 0.8 + 1}s`, 
              opacity: 0,
              animationFillMode: 'forwards' 
            }}
          >
            <div className="inline-block relative">
              <Heart className="absolute -left-8 -top-2 w-6 h-6 text-rose-500 animate-bounce-gentle fill-rose-500" />
              <p className="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400 italic" style={{ fontFamily: 'var(--font-serif)' }}>
                Yours forever, Sami ❤️
              </p>
              <Heart className="absolute -right-8 -top-2 w-6 h-6 text-rose-500 animate-bounce-gentle fill-rose-500" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] pointer-events-none"></div>
      </div>

      {/* Floating Interactive Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-float-up opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-100px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              transform: `scale(${0.5 + Math.random() * 1})`,
            }}
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-rose-400 fill-rose-400/30" />
          </div>
        ))}
      </div>
    </div>
  )
}
