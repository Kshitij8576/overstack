'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CoursesCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
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
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
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
            duration: 0.6,
          }}
          className="
            rounded-[40px]
            border
            border-neutral-200
            bg-white/80
            backdrop-blur-xl
            px-8
            py-20
            md:px-16
            md:py-24
            text-center
            shadow-[0_20px_80px_rgba(255,107,0,0.08)]
          "
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-200
              bg-orange-50
              px-5
              py-2
              text-sm
              font-medium
              text-orange-600
            "
          >
            START YOUR JOURNEY
          </div>

          {/* Heading */}

          <h2
            className="
              mt-8
              text-[42px]
              md:text-[72px]
              font-black
              tracking-[-0.06em]
              leading-[0.95]
            "
          >
            The future belongs
            <br />

            to people who build.
          </h2>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
              text-neutral-600
            "
          >
            Learn modern skills, build real projects,
            work with AI, and prepare for a future
            where technology creates opportunity.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-12
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >
            <button
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-orange-500
                text-white
                font-semibold
                transition-all
                hover:scale-[1.02]
                hover:bg-orange-600
              "
            >
              Apply Now

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-neutral-200
                bg-white
                font-semibold
                hover:border-orange-300
                hover:bg-orange-50
                transition-all
              "
            >
              Talk To Us
            </button>
          </div>

          {/* Trust Line */}

          <div
            className="
              mt-10
              text-sm
              text-neutral-500
            "
          >
            Live Learning • Real Projects • AI Integrated
          </div>
        </motion.div>
      </div>
    </section>
  )
}