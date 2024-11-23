'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import animationData from "@/public/animations/cigarette.json"
import { LottieRefCurrentProps } from 'lottie-react'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [playCount, setPlayCount] = useState(0)
  const [dollarAmount, setDollarAmount] = useState(0)

  const lottieRef = useRef<LottieRefCurrentProps | null>(null)

  const handleAnimationComplete = useCallback(() => {
    setPlayCount((prev) => prev + 1)
    setDollarAmount((prev) => parseFloat((prev + 0.65).toFixed(1))) // Add 0.65 and round to 1 decimal
    // Restart animation manually
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true)
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1) // Set playback speed here if necessary
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      {/* Top Section */}
      <div className="top-8 text-lg text-center text-green-400">
        Made with <span className="text-red-500">❤️</span> by BLNK
      </div>

      {/* Animation and Counters */}
      <div className="flex items-center justify-center">
        {/* Left Counter */}
        <div className="text-center mx-4 hidden sm:block">
          {/* Hide on small devices */}
          <p className="text-3xl font-bold">{playCount}</p>
        </div>

        {/* Center Content */}
        <div className="text-center mx-4">
          <h1 className="text-4xl font-bold mb-4">smokinisbad.</h1>
          <div className="w-13 h-10 mx-auto">
            <Lottie
              animationData={animationData}
              lottieRef={lottieRef}
              onComplete={handleAnimationComplete}
              loop={false}
            />
          </div>
        </div>

        {/* Right Counter */}
        <div className="text-center mx-2 hidden sm:block">
          {/* Hide on small devices */}
          <p className="text-3xl font-bold text-red-600">-${dollarAmount.toFixed(1)}</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bottom-4 text-lg text-center text-orange-400">
        Coming to iOS soon
      </div>
    </div>
  )
}
