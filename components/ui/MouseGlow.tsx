'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', updateMouse)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
    }
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 120,
        mass: 0.5,
      }}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-[1]
        w-[400px]
        h-[400px]
        rounded-full
        bg-orange-300/20
        blur-3xl
      "
    />
  )
}