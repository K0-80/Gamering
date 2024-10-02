"use client"

import React, { useEffect, useRef } from 'react'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface Drop {
  x: number
  y: number
  speed: number
  maxLength: number
}

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    const drops: Drop[] = []

    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * fontSize,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        maxLength: Math.floor(Math.random() * canvas.height * 0.6 + canvas.height * 0.2)
      })
    }

    const getPinkBlueColor = () => {
      return Math.random() > 0.5 ? '#FF69B4' : '#1E90FF' // Hot Pink or Dodger Blue
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)' // Increased opacity for faster fading
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128)
        const { x, y, speed, maxLength } = drops[i]

        if (y < maxLength) {
          ctx.fillStyle = getPinkBlueColor()
          ctx.font = `${fontSize}px ${jetBrainsMono.style.fontFamily}`
          ctx.fillText(text, x, y)

          drops[i].y += speed
        } else {
          drops[i].y = 0
          drops[i].speed = Math.random() * 2 + 1
          drops[i].maxLength = Math.floor(Math.random() * canvas.height * 0.6 + canvas.height * 0.2)
        }
      }
    }

    const animate = () => {
      draw()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const newColumns = Math.floor(canvas.width / fontSize)

      drops.length = 0
      for (let i = 0; i < newColumns; i++) {
        drops.push({
          x: i * fontSize,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          maxLength: Math.floor(Math.random() * canvas.height * 0.6 + canvas.height * 0.2)
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen"
    />
  )
}

export default MatrixBackground