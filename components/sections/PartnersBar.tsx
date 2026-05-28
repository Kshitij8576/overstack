'use client'

import { motion } from 'framer-motion'

const items = [
  'FULL STACK',
  'CYBERSECURITY',
  'DATA ANALYTICS',
  'LIVE LEARNING',
  'MODERN SKILLS',
  'REAL PROJECTS',
]

export default function PartnersBar() {
  return (
    <section className="relative overflow-hidden bg-white border-y border-neutral-100">
      {/* TOP FADE */}

      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-32
          bg-gradient-to-r
          from-white
          to-transparent
          z-10
        "
      />

      {/* BOTTOM FADE */}

      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-32
          bg-gradient-to-l
          from-white
          to-transparent
          z-10
        "
      />

      {/* SCROLL ROW */}

      <motion.div
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'linear',
        }}
        className="flex gap-24 whitespace-nowrap w-max"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-6
            "
          >
            <span
              className="
                text-[40px]
                md:text-[64px]
                font-black
                tracking-[-0.05em]
                text-black
              "
            >
              {item}
            </span>

            <div
              className="
                w-3
                h-3
                rounded-full
                bg-orange-500
              "
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}