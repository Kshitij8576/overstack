'use client'

import { motion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* GLOW */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
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
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-neutral-200
            bg-white/80
            backdrop-blur-2xl
            px-8
            py-20
            md:px-16
            md:py-24
            text-center
            shadow-[0_20px_80px_rgba(255,107,0,0.08)]
          "
        >
          {/* INNER GLOW */}

          <div
            className="
              absolute
              top-0
              right-0
              w-48
              h-48
              rounded-full
              bg-orange-200
              blur-3xl
              opacity-30
            "
          />

          {/* CONTENT */}

          <div className="relative z-10">
            {/* LABEL */}

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

            {/* TITLE */}

            <h2
              className="
                mt-8
                text-[42px]
                md:text-[72px]
                font-black
                tracking-[-0.06em]
                leading-[0.95]
                text-black
              "
            >
              Build your future
              <br />
              with Overstack.
            </h2>

            {/* DESCRIPTION */}

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
              Join immersive live programs designed
              for ambitious creators, developers,
              and future technology professionals.
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              <GlowButton>
                Apply Now
              </GlowButton>

              <button
                className="
                  px-7
                  py-4
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  text-lg
                  font-semibold
                  text-neutral-800
                  hover:border-orange-300
                  hover:bg-orange-50
                  transition-all
                "
              >
                Explore Courses
              </button>
            </div>

            {/* TRUST */}

            <div
              className="
                mt-10
                text-sm
                text-neutral-500
              "
            >
              Live learning • Real projects • Modern skills
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}