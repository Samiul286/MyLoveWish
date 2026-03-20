"use client"

interface MagicalDoorProps {
  isOpen: boolean
  onClick: () => void
}

export function MagicalDoor({ isOpen, onClick }: MagicalDoorProps) {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      {/* Decorative text above door */}
      <div className="text-center mb-8 space-y-3">
        <p className="text-3xl md:text-4xl font-serif text-rose-400 animate-glow-text tracking-wide drop-shadow-md">
          Israt My Queen 👑💖
        </p>
        <p className="text-lg md:text-xl font-sans text-rose-300 animate-pulse pt-2">
          Special wish from Sami 💕
        </p>
      </div>

      {/* The magical door */}
      <div className="relative cursor-pointer group" onClick={onClick}>
        {/* Glow effect behind door */}
        <div className={`absolute inset-0 bg-gradient-to-t from-amber-200/60 via-rose-200/40 to-transparent blur-2xl transform scale-110 transition-all duration-1000 ${isOpen ? 'opacity-100 scale-150' : 'opacity-60'}`} />
        
        {/* Door frame */}
        <div className="relative bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-[100px] p-3 shadow-2xl border-4 border-amber-300/60">
          {/* Door decoration top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-2xl">👑</span>
            </div>
          </div>

          {/* Door panels container */}
          <div className="relative w-64 h-96 md:w-80 md:h-[450px] overflow-hidden rounded-t-[90px] bg-gradient-to-b from-rose-100 to-rose-50">
            {/* Left door panel */}
            <div 
              className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 border-r border-amber-300/50 origin-left transition-transform duration-1500 ease-in-out ${isOpen ? '-rotate-y-110' : ''}`}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: isOpen ? 'rotateY(-110deg)' : 'rotateY(0deg)',
                transition: 'transform 1.5s ease-in-out'
              }}
            >
              {/* Door decorations */}
              <div className="absolute inset-4 border-2 border-amber-200/50 rounded-tl-[80px]" />
              <div className="absolute top-1/3 right-4 w-6 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full shadow-inner" />
              {/* Floral decoration */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl opacity-60">🌸</div>
            </div>

            {/* Right door panel */}
            <div 
              className={`absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-rose-200 via-rose-300 to-rose-400 border-l border-amber-300/50 origin-right transition-transform duration-1500 ease-in-out`}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: isOpen ? 'rotateY(110deg)' : 'rotateY(0deg)',
                transition: 'transform 1.5s ease-in-out'
              }}
            >
              {/* Door decorations */}
              <div className="absolute inset-4 border-2 border-amber-200/50 rounded-tr-[80px]" />
              <div className="absolute top-1/3 left-4 w-6 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full shadow-inner" />
              {/* Floral decoration */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl opacity-60">🌸</div>
            </div>

            {/* Light behind door */}
            <div className={`absolute inset-0 bg-gradient-to-t from-amber-100 via-yellow-50 to-white transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-yellow-200/50 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Click prompt */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-gradient-to-r from-amber-100/90 via-rose-100/90 to-amber-100/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-200/50 animate-bounce-gentle">
              <span className="text-lg md:text-xl font-serif text-rose-500 font-medium">
                ✨ Click the Door ✨
              </span>
            </div>
          </div>
        )}

        {/* Door step */}
        <div className="w-72 md:w-88 h-4 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 rounded-b-lg shadow-lg mx-auto" />
      </div>

      {/* Side decorations */}
      <div className="absolute left-4 md:left-1/4 top-1/3 text-4xl animate-float opacity-50">🌷</div>
      <div className="absolute right-4 md:right-1/4 top-1/3 text-4xl animate-float-delayed opacity-50">🌷</div>
      <div className="absolute left-8 md:left-1/3 bottom-1/4 text-3xl animate-float opacity-40">🌺</div>
      <div className="absolute right-8 md:right-1/3 bottom-1/4 text-3xl animate-float-delayed opacity-40">🌺</div>
    </div>
  )
}
