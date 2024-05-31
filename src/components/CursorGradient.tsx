'use client'
import { useState, useEffect, CSSProperties } from 'react'
import { useTheme } from 'next-themes'

export default function CursorGradient() {
  const { theme } = useTheme()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [gradientColor, setGradientColor] = useState(
    theme === 'dark' ? '#0b1b34' : '#d4d4d4',
  )

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
      setGradientColor('#0e2448') // Cor para dark mode
    } else {
      setGradientColor('#d4d4d4') // Cor cinza para light mode
    }
  }, [theme])

  const gradientStyle: CSSProperties = {
    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${gradientColor}, rgba(255,0,0,0) 70%)`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: -1,
  }

  return <div style={gradientStyle}></div>
}
