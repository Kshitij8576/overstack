'use client'

import { motion } from 'framer-motion'

const journeys = [
  {
    title: 'Full Stack + AI',
    color: 'bg-orange-500',
    steps: [
      'HTML & CSS',
      'JavaScript',
      'React',
      'Backend Development',
      'MERN Stack',
      'AI Coding',
    ],
  },

  {
    title: 'Cybersecurity + AI',
    color: 'bg-black',
    steps: [
      'Networking',
      'Linux',
      'Security Fundamentals',
      'Web Security',
      'Ethical Hacking',
      'AI Security',
    ],
  },

  {
    title: 'Data Analytics + AI',
    color: 'bg-blue-500',
    steps: [
      'Excel',
      'SQL',
      'Power BI',
      'Python',
      'Dashboards',
      'AI Analytics',
    ],
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function LearningJourney() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Glow */}

      <div
        className="
          absolute
          left-[-250px]
          top-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
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
          transition={{
            duration: 0.6,
          }}
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
            LEARNING JOURNEY
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
            From beginner
            <br />
            to career-ready.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-neutral-600
              leading-relaxed
              max-w-2xl
            "
          >
            Every learning path follows a structured
            progression designed to transform curiosity
            into practical skills, real projects, and
            professional confidence.
          </p>
        </motion.div>

        {/* Roadmaps */}

        <div
          className="
            mt-24
            grid
            lg:grid-cols-3
            gap-12
          "
        >
          {journeys.map((journey, index) => (
            <motion.div
              key={journey.title}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                rounded-[32px]
                border
                border-neutral-200
                bg-white
                p-8
                transition-all
                duration-500
                hover:border-orange-200
                hover:shadow-[0_20px_60px_rgba(255,107,0,0.08)]
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  rounded-full
                  bg-orange-100
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-black
                    tracking-tight
                  "
                >
                  {journey.title}
                </h3>

                {/* Timeline */}

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-10 space-y-8"
                >
                  {journey.steps.map((step, idx) => (
                    <motion.div
                      key={step}
                      variants={item}
                      className="
                        relative
                        pl-10
                      "
                    >
                      {/* Animated Line */}

                      {idx !== journey.steps.length - 1 && (
                        <motion.div
                          initial={{
                            height: 0,
                          }}
                          whileInView={{
                            height: 48,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: idx * 0.15,
                          }}
                          className="
                            absolute
                            left-[11px]
                            top-8
                            w-[2px]
                            bg-neutral-200
                          "
                        />
                      )}

                      {/* Animated Dot */}

                      <motion.div
                        initial={{
                          scale: 0,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.15,
                          duration: 0.4,
                        }}
                        animate={
                          idx === journey.steps.length - 1
                            ? {
                                scale: [1, 1.15, 1],
                              }
                            : undefined
                        }
                        className={`
                          absolute
                          left-0
                          top-1
                          w-6
                          h-6
                          rounded-full
                          ${journey.color}
                          shadow-lg
                        `}
                      />

                      {/* Step */}

                      <div>
                        <div
                          className="
                            font-semibold
                            text-lg
                            tracking-tight
                          "
                        >
                          {step}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Path */}

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
          }}
          className="
            mt-28
            rounded-[32px]
            border
            border-neutral-200
            bg-[#fafafa]
            p-8
            md:p-12
          "
        >
          <div
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-6
              text-center
            "
          >
            <Stage text="BEGINNER" />
            <Arrow />
            <Stage text="FOUNDATION" />
            <Arrow />
            <Stage text="PROJECTS" />
            <Arrow />
            <Stage text="AI WORKFLOWS" />
            <Arrow />
            <Stage text="CAREER READY" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stage({ text }: { text: string }) {
  return (
    <div
      className="
        text-sm
        md:text-base
        font-semibold
        tracking-[0.15em]
        text-neutral-700
      "
    >
      {text}
    </div>
  )
}

function Arrow() {
  return (
    <motion.div
      animate={{
        x: [0, 5, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="
        text-orange-500
        font-bold
        text-xl
      "
    >
      →
    </motion.div>
  )
}