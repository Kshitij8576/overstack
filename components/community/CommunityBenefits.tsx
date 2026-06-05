'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    number: '01',
    title: 'Stay Updated',
    description:
      'Get notified about new programs, workshops, events, and learning opportunities before anyone else.',
  },

  {
    number: '02',
    title: 'Learn Together',
    description:
      'Connect with aspiring developers, cybersecurity learners, and future data professionals on the same journey.',
  },

  {
    number: '03',
    title: 'Discover Opportunities',
    description:
      'Receive updates about internships, projects, collaborations, and career-building opportunities.',
  },
]

export default function CommunityBenefits() {
  return (
    <section className="relative bg-[#fafafa] py-16 overflow-hidden">
      {/* Glow */}

      <div
        className="
          absolute
          left-[-200px]
          top-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
            WHY JOIN
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
            More than a
            <br />

            WhatsApp group.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-neutral-600
            "
          >
            A place to learn, connect, and grow
            alongside people pursuing similar goals.
          </p>
        </motion.div>

        {/* Benefits */}

        <div className="mt-20 border-t border-neutral-200">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
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
                group
                border-b
                border-neutral-200
              "
            >
              <div
                className="
                  py-10
                  flex
                  flex-col
                  md:flex-row
                  md:items-start
                  gap-8
                "
              >
                {/* Number */}

                <div
                  className="
                    text-orange-500
                    font-semibold
                    text-sm
                    min-w-[50px]
                  "
                >
                  {benefit.number}
                </div>

                {/* Content */}

                <div className="flex-1">
                  <h3
                    className="
                      text-2xl
                      md:text-4xl
                      font-black
                      tracking-tight
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      leading-relaxed
                      text-neutral-600
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}