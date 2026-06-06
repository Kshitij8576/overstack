'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      {/* Glow */}

      <div
        className="
          absolute
          right-[-200px]
          top-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-5xl">
          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-orange-500
              font-semibold
            "
          >
            ABOUT OVERSTACK
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mt-8
              text-[54px]
              md:text-[90px]
              lg:text-[110px]
              font-black
              tracking-[-0.07em]
              leading-[0.9]
            "
          >
            Education should
            <br />

            prepare students
            <br />

            for the{' '}
            <span className="text-orange-500">
              future.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mt-10
              max-w-2xl
              text-lg
              md:text-xl
              leading-relaxed
              text-neutral-600
            "
          >
            Overstack was created to bridge the gap
            between traditional education and the
            skills modern industries actually demand.
            We believe learning should be practical,
            immersive, and aligned with the future
            of technology.
          </motion.p>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
              mt-14
              flex
              flex-wrap
              gap-10
            "
          >
            <Stat
              value="3"
              label="Learning Paths"
            />

            <Stat
              value="Live"
              label="Interactive Classes"
            />

            <Stat
              value="AI"
              label="Integrated Learning"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div>
      <div
        className="
          text-4xl
          font-black
          tracking-tight
        "
      >
        {value}
      </div>

      <div
        className="
          mt-2
          text-sm
          text-neutral-500
        "
      >
        {label}
      </div>
    </div>
  )
}