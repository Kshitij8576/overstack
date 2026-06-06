'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      {/* Glow */}

      <div
        className="
          absolute
          right-[-250px]
          top-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-5xl">
          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-orange-500
              font-semibold
            "
          >
            SERVICES
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mt-8
              text-[52px]
              md:text-[90px]
              font-black
              tracking-[-0.06em]
              leading-[0.95]
            "
          >
            We don't just teach
            <br />

            technology.
            <br />

            <span className="text-orange-500">
              We build with it.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mt-10
              max-w-2xl
              text-lg
              md:text-xl
              leading-relaxed
              text-neutral-600
            "
          >
            From premium websites and brand identities
            to marketing creatives and digital assets,
            Overstack helps businesses build a strong
            and modern online presence.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/917355110417"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-orange-500
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                hover:bg-orange-600
              "
            >
              Start a Project

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="/community"
              className="
                rounded-2xl
                border
                border-neutral-200
                px-7
                py-4
                font-semibold
                transition-all
                hover:border-orange-300
                hover:bg-orange-50
              "
            >
              Join Community
            </a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-16
              flex
              flex-wrap
              gap-10
            "
          >
            <Stat
              value="Web"
              label="Development"
            />

            <Stat
              value="Brand"
              label="Identity"
            />

            <Stat
              value="Creative"
              label="Design"
            />

            <Stat
              value="AI"
              label="Solutions"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div>
      <div
        className="
          text-3xl
          font-black
          tracking-tight
        "
      >
        {value}
      </div>

      <div
        className="
          mt-2
          text-sm
          text-neutral-500
        "
      >
        {label}
      </div>
    </div>
  )
}