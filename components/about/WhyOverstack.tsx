'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const problems = [
  'Theory-heavy learning',
  'Outdated industry exposure',
  'Limited practical experience',
  'Little focus on AI workflows',
]

const solutions = [
  'Project-based learning',
  'Modern industry-relevant skills',
  'Real-world applications',
  'AI integrated into every path',
]

export default function WhyOverstack() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16">
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-30
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

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
          className="max-w-3xl"
        >
          <div
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-orange-500
              font-semibold
            "
          >
            WHY OVERSTACK
          </div>

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
            The gap between
            education and industry
            is growing.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-neutral-600
              max-w-2xl
            "
          >
            Technology evolves rapidly, but traditional
            learning often struggles to keep pace.
            Overstack was created to close that gap.
          </p>
        </motion.div>

        {/* Comparison */}

        <div
          className="
            mt-20
            grid
            lg:grid-cols-2
            gap-8
          "
        >
          {/* Problem */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="
              rounded-[36px]
              border
              border-neutral-200
              bg-white
              p-8
              md:p-10
            "
          >
            <div
              className="
                text-sm
                uppercase
                tracking-[0.2em]
                text-neutral-500
                font-semibold
              "
            >
              THE PROBLEM
            </div>

            <h3
              className="
                mt-5
                text-3xl
                md:text-5xl
                font-black
                tracking-tight
              "
            >
              Traditional
              learning.
            </h3>

            <div className="mt-10 space-y-6">
              {problems.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-neutral-300
                    "
                  />

                  <div
                    className="
                      text-neutral-700
                      text-lg
                    "
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-black
              p-8
              md:p-10
            "
          >
            {/* Inner Glow */}

            <div
              className="
                absolute
                top-0
                right-0
                w-72
                h-72
                rounded-full
                bg-orange-500
                blur-3xl
                opacity-20
              "
            />

            <div className="relative z-10">
              <div
                className="
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-orange-400
                  font-semibold
                "
              >
                THE SOLUTION
              </div>

              <h3
                className="
                  mt-5
                  text-3xl
                  md:text-5xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Overstack.
              </h3>

              <div className="mt-10 space-y-6">
                {solutions.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <ArrowRight
                      size={18}
                      className="text-orange-400"
                    />

                    <div
                      className="
                        text-neutral-300
                        text-lg
                      "
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}

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
            delay: 0.2,
          }}
          className="
            mt-16
            text-center
          "
        >
          <p
            className="
              text-xl
              md:text-2xl
              font-medium
              text-neutral-700
            "
          >
            Education should evolve as fast as technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}