'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'Discovery',
    description:
      'We understand your goals, audience, and requirements before planning the project.',
  },

  {
    title: 'Design',
    description:
      'We create modern interfaces and visual systems focused on clarity and user experience.',
  },

  {
    title: 'Build',
    description:
      'The project is developed with performance, responsiveness, and scalability in mind.',
  },

  {
    title: 'Launch',
    description:
      'After testing and refinement, your project goes live and is ready for the world.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16">
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-orange-500
          blur-3xl
          opacity-10
        "
      />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
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
            OUR PROCESS
          </div>

          <h2
            className="
              mt-6
              text-[42px]
              md:text-[64px]
              font-black
              tracking-[-0.05em]
              leading-[1]
              text-white
            "
          >
            From idea
            <br />
            to launch.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            A simple and transparent process that
            turns ideas into digital experiences.
          </p>
        </motion.div>

        {/* Desktop */}

        <div className="hidden lg:flex items-start justify-between mt-24">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start"
            >
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
                  delay: index * 0.15,
                }}
                className="max-w-[220px]"
              >
                <div
                  className="
                    text-orange-400
                    text-sm
                    font-semibold
                  "
                >
                  0{index + 1}
                </div>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-neutral-400
                    leading-relaxed
                  "
                >
                  {step.description}
                </p>
              </motion.div>

              {index !== steps.length - 1 && (
                <div className="mx-8 mt-10">
                  <ArrowRight
                    className="text-orange-400"
                    size={22}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}

        <div className="lg:hidden mt-20 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
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
                delay: index * 0.1,
              }}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-6
              "
            >
              <div
                className="
                  text-orange-400
                  text-sm
                  font-semibold
                "
              >
                0{index + 1}
              </div>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-black
                  text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-4
                  text-neutral-400
                  leading-relaxed
                "
              >
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <div className="mt-6 flex justify-center">
                  <ArrowDown
                    className="text-orange-400"
                    size={20}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-24
            text-center
          "
        >
          <div
            className="
              inline-flex
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-6
              py-3
              text-orange-400
              font-medium
            "
          >
            Simple process. Exceptional outcomes.
          </div>
        </motion.div>
      </div>
    </section>
  )
}