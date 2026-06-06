'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Premium websites built for speed, conversion, and modern user experience.',

    items: [
      'Business Websites',
      'Portfolio Websites',
      'Landing Pages',
      'Web Applications',
      'E-Commerce',
      'Custom Solutions',
    ],
  },

  {
    number: '02',
    title: 'Brand Identity',
    description:
      'Build a memorable and professional brand that stands out.',

    items: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Typography Systems',
      'Color Systems',
      'Social Assets',
    ],
  },

  {
    number: '03',
    title: 'Creative Design',
    description:
      'Modern visuals designed to attract attention and drive engagement.',

    items: [
      'Posters',
      'Social Media Creatives',
      'Presentations',
      'Event Graphics',
      'Marketing Assets',
      'Digital Campaigns',
    ],
  },

  {
    number: '04',
    title: 'AI Solutions',
    description:
      'Modern automation and AI-powered systems for growing businesses.',

    items: [
      'AI Chatbots',
      'Lead Automation',
      'Workflow Automation',
      'AI Assistants',
      'Content Systems',
      'Custom Integrations',
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16">
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
            WHAT WE DO
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
            Services built
            <br />
            for modern businesses.
          </h2>
        </motion.div>

        {/* Services */}

        <div className="mt-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  lg:grid-cols-[120px_1fr_350px]
                  gap-10
                "
              >
                {/* Number */}

                <div
                  className="
                    text-orange-500
                    font-semibold
                  "
                >
                  {service.number}
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
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-lg
                      text-neutral-600
                      leading-relaxed
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* Skills */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    content-start
                  "
                >
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full
                        border
                        border-neutral-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Border */}

          <div className="border-t border-neutral-200" />
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mt-20
            flex
            justify-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              text-orange-500
              font-semibold
            "
          >
            Modern execution. Startup-friendly pricing.

            <ArrowRight size={18} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}