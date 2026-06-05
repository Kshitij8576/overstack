'use client'

import { motion } from 'framer-motion'

const capabilities = [
  {
    title: 'AI Development',
    description:
      'Learn how modern developers build faster, debug smarter, and ship products using AI-assisted workflows.',
  },

  {
    title: 'AI Security',
    description:
      'Use AI to analyze vulnerabilities, investigate threats, and strengthen security operations.',
  },

  {
    title: 'AI Analytics',
    description:
      'Transform raw data into insights with AI-powered analysis, reporting, and visualization.',
  },
]

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-black py-16">
      {/* Glow */}

      <div
        className="
          absolute
          right-[-200px]
          top-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-orange-500
          blur-3xl
          opacity-20
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            grid
            lg:grid-cols-[1fr_420px]
            gap-20
            items-start
          "
        >
          {/* LEFT */}

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
          >
            <div
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-orange-400
                font-semibold
              "
            >
              AI ERA
            </div>

            <h2
              className="
                mt-6
                text-[48px]
                md:text-[80px]
                font-black
                tracking-[-0.06em]
                leading-[0.95]
                text-white
              "
            >
              AI won't
              <br />
              replace skilled
              <br />
              professionals.
            </h2>

            <div
              className="
                mt-10
                h-px
                bg-white/10
                max-w-md
              "
            />

            <h3
              className="
                mt-10
                text-2xl
                md:text-4xl
                font-bold
                text-orange-400
                leading-tight
              "
            >
              Professionals
              who use AI will.
            </h3>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-neutral-400
              "
            >
              Overstack integrates AI directly into
              every learning path so students learn
              how modern professionals actually work.
            </p>
          </motion.div>

          {/* RIGHT */}

          <div className="space-y-5">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  group
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  transition-all
                "
              >
                <div
                  className="
                    text-sm
                    font-semibold
                    text-orange-400
                  "
                >
                  0{index + 1}
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-neutral-400
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}