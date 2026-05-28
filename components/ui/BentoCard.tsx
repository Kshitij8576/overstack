'use client'

import { motion } from 'framer-motion'

type BentoCardProps = {
  children: React.ReactNode
  className?: string
}

export default function BentoCard({
  children,
  className,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 18,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-orange-100
        bg-white/70
        backdrop-blur-xl
        shadow-[0_10px_50px_rgba(255,107,0,0.08)]
        p-8
        ${className}
      `}
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          w-40
          h-40
          bg-orange-200
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-40
          transition-all
          duration-700
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}