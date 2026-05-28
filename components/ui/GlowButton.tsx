'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type GlowButtonProps = {
  children: React.ReactNode
  secondary?: boolean
}

export default function GlowButton({
  children,
  secondary,
}: GlowButtonProps) {
  if (secondary) {
    return (
      <motion.button
        whileHover={{
          y: -2,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          relative
          overflow-hidden
          border
          border-neutral-300
          hover:border-orange-300
          hover:bg-orange-50
          px-8
          py-4
          rounded-2xl
          text-lg
          font-semibold
          transition-all
        "
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        group
        relative
        overflow-hidden
        bg-orange-500
        hover:bg-orange-600
        text-white
        px-8
        py-4
        rounded-2xl
        text-lg
        font-semibold
        flex
        items-center
        gap-2
        transition-all
        shadow-[0_10px_40px_rgba(255,107,0,0.35)]
      "
    >
      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-orange-400
          via-orange-300
          to-orange-500
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* CONTENT */}
      <span className="relative z-10">
        {children}
      </span>

      <ArrowRight
        size={20}
        className="
          relative
          z-10
          group-hover:translate-x-1
          transition-transform
        "
      />
    </motion.button>
  )
}