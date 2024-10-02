"use client"

import React, { useEffect, useState } from 'react'

interface TypewriterEffectProps {
  text: string
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (text && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 20)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const highlightText = (text: string): string => {
    return text
      .replace(
        /(var|name|type|location|properties|console\.log|<button>|<\/button>|<a|<\/a>)/g,
        (match) => {
          if (match === 'var') {
            return `<span class="text-pink-500">${match}</span>`
          } else if (match === 'console.log') {
            return `<span class="text-green-500">${match}</span>`
          } else if (match.startsWith('<') || match.startsWith('</')) {
            return `<span class="text-yellow-500">${match.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`
          } else {
            return `<span class="text-blue-500">${match}</span>`
          }
        }
      )
      .replace(
        /(https:\/\/discordapp\.com\/users\/710127400788164658|ky080629@gmail\.com)/g,
        (match) => `<a href="${match}" target="_blank" rel="noopener noreferrer" class="text-pink-500 underline">${match}</a>`
      )
  }

  return (
    <pre className="text-white font-mono whitespace-pre-wrap break-words text-left">
      <span dangerouslySetInnerHTML={{ __html: highlightText(displayedText) }} />
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </pre>
  )
}

export default TypewriterEffect