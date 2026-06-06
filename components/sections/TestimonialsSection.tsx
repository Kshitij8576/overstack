'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'The sessions were practical, engaging, and focused on real-world skills rather than just theory.',
    name: 'Student',
    role: 'Full Stack Program',
  },

  {
    quote:
      'The website exceeded our expectations. Modern design, smooth experience, and delivered on time.',
    name: 'Client',
    role: 'Business Website',
  },

  {
    quote:
      'Working with Overstack was simple and efficient. The final result looked far more premium than we expected.',
    name: 'Founder',
    role: 'Startup Project',
  },
]

export default function TestimonialsSection() {
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

      {/* Grid */}

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
          className="max-w-3xl"
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
            TESTIMONIALS
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
            What people
            are saying.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            Feedback from learners, founders,
            and businesses we've worked with.
          </p>
        </motion.div>

        {/* Testimonials */}

        <div className="mt-20 grid lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
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
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
              "
            >
              {/* Quote */}

              <div
                className="
                  text-4xl
                  text-orange-400
                  leading-none
                "
              >
                "
              </div>

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-neutral-300
                "
              >
                {item.quote}
              </p>

              {/* Author */}

              <div className="mt-10">
                <div
                  className="
                    font-semibold
                    text-white
                  "
                >
                  {item.name}
                </div>

                <div
                  className="
                    mt-1
                    text-sm
                    text-neutral-500
                  "
                >
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}

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
            Built on trust, learning, and execution.
          </div>
        </motion.div>
      </div>
    </section>
  )
}