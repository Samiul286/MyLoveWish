"use client"

import { useState, useEffect, useRef } from "react"
import { MagicalDoor } from "@/components/magical-door"
import { FloatingElements } from "@/components/floating-elements"
import { SpecialEidWish } from "@/components/special-eid-wish"

export default function EidSurprisePage() {
  const [doorOpen, setDoorOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      audioRef.current = new window.Audio('/eid-music2.mp3')
      audioRef.current.loop = true
    }
  }, [])

  const handleDoorClick = () => {
    setDoorOpen(true)
    
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Audio playback failed:", err))
    }

    setTimeout(() => {
      setShowContent(true)
    }, 1500)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-rose-50 via-amber-50/50 to-rose-100">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-pink-200/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-radial from-amber-200/30 to-transparent rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-rose-200/40 to-transparent rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-yellow-100/40 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Floating elements layer */}
      <FloatingElements isDoorOpen={doorOpen} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {!showContent ? (
          <MagicalDoor isOpen={doorOpen} onClick={handleDoorClick} />
        ) : (
          <div className="animate-fade-in-up w-full max-w-4xl mx-auto">
            <SpecialEidWish />
          </div>
        )}
      </div>

      {/* Sparkle overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </main>
  )
}
