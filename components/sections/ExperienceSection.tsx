'use client'

import { motion } from 'framer-motion'

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16">
      {/* GLOW */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* LABEL */}

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
            duration: 0.6,
          }}
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-orange-200
            bg-white/80
            backdrop-blur-xl
            px-5
            py-2
            text-sm
            font-medium
            text-orange-600
          "
        >
          THE EXPERIENCE
        </motion.div>

        {/* MAIN */}

        <motion.h2
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
            delay: 0.1,
            duration: 0.7,
          }}
          className="
            mt-10
            text-[48px]
            md:text-[82px]
            font-black
            tracking-[-0.06em]
            leading-[0.95]
            text-black
          "
        >
          Education
          <br />

          designed for
          <br />

          ambitious people.
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
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
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            mt-10
            text-xl
            leading-relaxed
            text-neutral-600
            max-w-3xl
            mx-auto
          "
        >
          Learn modern skills through immersive
          live experiences, practical systems,
          real projects, and collaborative learning
          built for the modern technology industry.
        </motion.p>

        {/* MINI STATS */}

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
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            mt-16
            flex
            flex-wrap
            items-center
            justify-center
            gap-10
          "
        >
          <Stat value="Live" label="Interactive sessions" />

          <Stat value="Real" label="Industry projects" />

          <Stat value="Modern" label="Learning systems" />
        </motion.div>
      </div>
    </section>
  )
}

/* STAT */

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="text-center">
      <div
        className="
          text-3xl
          font-black
          tracking-tight
          text-orange-500
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