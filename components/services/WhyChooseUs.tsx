'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Modern Design',
    description:
      'Clean, premium interfaces designed to create strong first impressions and memorable user experiences.',
  },

  {
    number: '02',
    title: 'Startup-Friendly Pricing',
    description:
      'Professional execution without enterprise-level costs, making high-quality digital solutions accessible.',
  },

  {
    number: '03',
    title: 'Fast Delivery',
    description:
      'Efficient workflows and streamlined processes help bring projects from idea to launch quickly.',
  },

  {
    number: '04',
    title: 'Performance First',
    description:
      'Every project is optimized for speed, responsiveness, and long-term scalability.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            WHY CHOOSE US
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
            Built for ambitious
            businesses.
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
            We combine modern design, efficient execution,
            and practical pricing to help businesses grow
            without unnecessary complexity.
          </p>
        </motion.div>

        {/* Reasons Grid */}

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
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
              whileHover={{
                y: -4,
              }}
              className="
                group
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
              <div
                className="
                  text-orange-500
                  text-sm
                  font-semibold
                "
              >
                {reason.number}
              </div>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  tracking-tight
                  transition-colors
                  group-hover:text-orange-500
                "
              >
                {reason.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-relaxed
                  text-neutral-600
                "
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-20
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-200
              bg-orange-50
              px-6
              py-3
              text-orange-600
              font-medium
            "
          >
            Premium quality. Practical pricing.
          </div>
        </motion.div>
      </div>
    </section>
  )
}