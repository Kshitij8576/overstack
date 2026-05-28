'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-32 pb-14">
      {/* MASSIVE GLOW */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-orange-500
          blur-3xl
          opacity-20
        "
      />

      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HUGE BRAND */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <h2
            className="
              text-[72px]
              md:text-[140px]
              lg:text-[200px]
              font-black
              tracking-[-0.08em]
              leading-[0.85]
              text-white
            "
          >
            OVER
            <span className="text-orange-500">
              STACK
            </span>
          </h2>
        </motion.div>

        {/* DESCRIPTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="
            mt-12
            max-w-2xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            Modern immersive education for
            ambitious creators, developers,
            and future technology professionals.
          </p>
        </motion.div>

        {/* COPYRIGHT */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            mt-20
            text-center
            text-sm
            text-neutral-600
          "
        >
          © 2026 Overstack — Built for the modern internet generation.
        </motion.div>
      </div>
    </footer>
  )
}