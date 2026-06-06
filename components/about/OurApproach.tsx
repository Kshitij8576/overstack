'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'Learn Live',
    description:
      'Interactive sessions that encourage discussion, collaboration, and direct guidance instead of passive video consumption.',
  },

  {
    number: '02',
    title: 'Build Projects',
    description:
      'Skills are developed through practical implementation, helping students create real-world projects and portfolios.',
  },

  {
    number: '03',
    title: 'Use AI',
    description:
      'Modern professionals work alongside AI. Students learn how to leverage AI effectively rather than compete against it.',
  },

  {
    number: '04',
    title: 'Stay Relevant',
    description:
      'Curriculum evolves alongside industry trends, ensuring learners develop skills that remain valuable in the future.',
  },
]

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Glow */}

      <div
        className="
          absolute
          right-[-200px]
          top-0
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
            OUR APPROACH
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
            Learning designed
            for the real world.
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
            We focus on practical learning,
            modern workflows, and real-world
            applications that prepare students
            for meaningful careers.
          </p>
        </motion.div>

        {/* Pillars */}

        <div className="mt-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
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
                delay: index * 0.1,
              }}
              className="
                group
                border-t
                border-neutral-200
                py-12
              "
            >
              <div
                className="
                  grid
                  md:grid-cols-[120px_1fr]
                  gap-8
                "
              >
                {/* Number */}

                <div
                  className="
                    text-orange-500
                    font-semibold
                    text-lg
                  "
                >
                  {pillar.number}
                </div>

                {/* Content */}

                <div>
                  <h3
                    className="
                      text-3xl
                      md:text-5xl
                      font-black
                      tracking-tight
                      transition-colors
                      group-hover:text-orange-500
                    "
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-lg
                      leading-relaxed
                      text-neutral-600
                    "
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final Border */}

          <div className="border-t border-neutral-200" />
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
            mt-20
            text-center
          "
        >
          <p
            className="
              text-xl
              md:text-3xl
              font-medium
              tracking-tight
            "
          >
            Learn. Build. Adapt. Grow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}