'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Live learning',
    description:
      'Interactive sessions focused on real understanding and practical workflows.',
  },
  {
    title: 'Industry projects',
    description:
      'Build portfolio-ready projects inspired by modern startups and companies.',
  },
  {
    title: 'Modern curriculum',
    description:
      'Learn current tools, systems, and technologies actually used today.',
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function WhySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* ANIMATED GLOW */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-0
          right-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TOP */}

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
              text-black
            "
          >
            Modern learning
            <br />
            built for real careers.
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
            Overstack focuses on immersive,
            practical, and industry-focused
            education designed for ambitious
            creators and developers.
          </p>
        </motion.div>

        {/* FEATURES */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-20
            grid
            md:grid-cols-3
            gap-6
          "
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-neutral-200
                bg-white
                p-7
                hover:border-orange-200
                hover:shadow-[0_20px_50px_rgba(255,107,0,0.08)]
                transition-all
                duration-500
              "
            >
              {/* HOVER GLOW */}

              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-32
                  h-32
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
                {/* NUMBER */}

                <div
                  className="
                    text-sm
                    font-semibold
                    text-orange-500
                  "
                >
                  0{index + 1}
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    tracking-tight
                    text-black
                  "
                >
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-neutral-600
                  "
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}