'use client'

import { motion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-70
        "
      />

      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-40
          pb-16
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1fr_500px]
            gap-20
            items-center
          "
        >
          {/* LEFT SIDE */}

          <div>
            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-200
                bg-white/80
                backdrop-blur-xl
                px-4
                py-2
                text-sm
                font-medium
                text-neutral-700
              "
            >
              Modern Tech Education
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="
                mt-10
                text-[64px]
                sm:text-[88px]
                lg:text-[118px]
                font-black
                tracking-[-0.07em]
                leading-[0.9]
                text-black
              "
            >
              Learn
              <br />

              <span className="text-orange-500">
                future-ready
              </span>

              <br />

              tech skills.
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mt-8
                max-w-xl
                text-lg
                md:text-xl
                leading-relaxed
                text-neutral-600
              "
            >
              Live immersive programs in Full Stack
              Development, Data Analytics, and
              Cybersecurity built for modern creators.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.3,
    duration: 0.6,
  }}
  className="
    mt-10
    flex
    flex-wrap
    gap-4
  "
>
  <Link href="/courses">
    <GlowButton>
      Start Learning
    </GlowButton>
  </Link>

  <Link
    href="/courses/#courses"
    className="
      px-7
      py-4
      rounded-2xl
      border
      border-neutral-200
      bg-white/70
      backdrop-blur-xl
      text-lg
      font-semibold
      text-neutral-800
      hover:border-orange-300
      hover:bg-orange-50
      transition-all
      inline-flex
      items-center
      justify-center
    "
  >
    Explore Courses
  </Link>
</motion.div>

            
          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="hidden lg:block"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-orange-100
                bg-white/70
                backdrop-blur-2xl
                p-8
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
                  opacity-40
                "
              />

              {/* TOP BAR */}

              <div className="relative z-10 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>

              {/* PANEL */}

              <div className="relative z-10 mt-10">
                <div
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-orange-500
                    font-semibold
                  "
                >
                  OVERSTACK
                </div>

                <h3
                  className="
                    mt-5
                    text-4xl
                    font-black
                    tracking-tight
                    leading-tight
                  "
                >
                  Build skills
                  <br />
                  that actually
                  <br />
                  matter.
                </h3>

                {/* MINI CARDS */}

                <div className="mt-10 space-y-4">
                  <MiniCard title="Full Stack Development" />
                  <MiniCard title="Data Analytics" />
                  <MiniCard title="Cybersecurity" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* MINI CARD */

function MiniCard({
  title,
}: {
  title: string
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-orange-100
        bg-white/80
        px-5
        py-4
      "
    >
      <span className="font-semibold text-neutral-800">
        {title}
      </span>

      <div
        className="
          w-2.5
          h-2.5
          rounded-full
          bg-orange-500
        "
      />
    </div>
  )
}