'use client'

import { motion } from 'framer-motion'

export default function FounderNote() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Glow */}

      <div
        className="
          absolute
          right-[-200px]
          top-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-30
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Label */}

          <div
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-orange-500
              font-semibold
            "
          >
            WHY WE STARTED
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-[42px]
              md:text-[64px]
              font-black
              tracking-[-0.05em]
              leading-[1]
            "
          >
            Technology moves fast.
            <br />

            Education should too.
          </h2>

          {/* Content */}

          <div
            className="
              mt-10
              max-w-3xl
              mx-auto
              space-y-6
              text-lg
              leading-relaxed
              text-neutral-600
            "
          >
            <p>
              Traditional education often struggles
              to keep pace with the speed of modern
              technology and industry change.
            </p>

            <p>
              Overstack was created to bridge that gap
              through live learning, real projects,
              AI-powered workflows, and practical
              skills that prepare students for the
              future.
            </p>
          </div>

          {/* Quote */}

          <div
            className="
              mt-12
              text-orange-500
              font-semibold
              text-xl
            "
          >
            Education should evolve as fast as technology.
          </div>
        </motion.div>
      </div>
    </section>
  )
}