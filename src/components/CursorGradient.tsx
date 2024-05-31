'use client'
import { useState, useEffect, CSSProperties } from 'react'
import { useTheme } from 'next-themes'

export default function CursorGradient() {
  const { theme } = useTheme()
  console.log(theme)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [gradientColor, setGradientColor] = useState('#0b1b34')
  const [showGradient, setShowGradient] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      setGradientColor('#0c203f') // Cor para dark mode
      setShowGradient(true)
    } else {
      setGradientColor('#d4d4d4') // Cor cinza para light mode
      setShowGradient(true)
    }
  }, [theme])

  const background = showGradient
    ? `radial-gradient(circle at ${position.x}px ${position.y}px, ${gradientColor}, rgba(255,0,0,0) 60%)`
    : ''

  const gradientStyle: CSSProperties = {
    background,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: -1,
  }

  return showGradient ? <div style={gradientStyle}></div> : <div></div>
}
