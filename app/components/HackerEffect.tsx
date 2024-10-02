"use client"

import React, { useEffect, useRef, useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import { ChevronDown } from 'lucide-react'
import GlitchyTitle from './GlitchyTitle'
import TypewriterEffect from './TypewriterEffect'
import MatrixBackground from './MatrixBackground'
import FloatingOrbs from './FloatingOrbs'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

const words = ['am him', 'sigma', 'skibity', 'gooner', 'gyat', 'rizzler', 'mewwing', 'AImaxing']

const HackerEffect: React.FC = () => {
  const typewriterRef = useRef<HTMLDivElement>(null)
  const [glitchText, setGlitchText] = useState('')
  const [glitchIndex, setGlitchIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [startTypewriter, setStartTypewriter] = useState(false)

  const typewriterText = `var object = {
  name: 'K0·80',
  type: 'Him',
  location: 'Earth',
  properties:['Java',
              'Blockbench',
              'JavaScript',
              'HTML',
              'CSS']
};

console.log(\`Hello, I'm \${object.name} from \${object.location}!\`);
console.log(\`I'm skilled in:\`);
for (var i = 0; i < object.properties.length; i++) {
  console.log(\`- \${object.properties[i]}\`);
}
console.log(\`Join me in epic gamering!\`);

<button><a href="https://discordapp.com/users/710127400788164658" target="_blank">Discord</a></button>
<button><a href="ky080629@gmail.com" target="_blank">Email</a></button>`

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  useEffect(() => {
    setGlitchText(words[glitchIndex])
  }, [glitchIndex])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (typewriterRef.current) {
        const rect = typewriterRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setStartTypewriter(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden bg-black ${jetBrainsMono.className}`}>
      <MatrixBackground />
      <div className="relative z-10">
        <section className="h-screen flex flex-col items-center justify-center overflow-hidden">
          <div style={{ transform: `translateY(${scrollY * -0.5}px)` }}>
            <GlitchyTitle text="EPIC GAMERING" subtitle={glitchText.toUpperCase()} />
          </div>
          <div className="animate-bounce mt-8" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
            <ChevronDown className="text-white" size={32} />
          </div>
        </section>
        <section className="min-h-screen flex items-center justify-between px-4 bg-black">
          <div ref={typewriterRef} className="max-w-xl w-full">
            {startTypewriter && <TypewriterEffect text={typewriterText} />}
          </div>
          <FloatingOrbs />
        </section>
      </div>
    </div>
  )
}

export default HackerEffect
