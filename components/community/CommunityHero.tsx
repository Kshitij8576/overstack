'use client'

import { motion } from 'framer-motion'

export default function CommunityHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      <div
        className="
          absolute
          right-[-200px]
          top-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            COMMUNITY
          </div>

          <h1
            className="
              mt-6
              text-[52px]
              md:text-[84px]
              font-black
              tracking-[-0.06em]
              leading-[0.95]
            "
          >
            Learn together.
            <br />

            <span className="text-orange-500">
              Grow together.
            </span>
          </h1>

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
            Join a growing community of
            developers, cybersecurity learners,
            and future data professionals.
          </p>

          <a
            href="YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              mt-10
              px-8
              py-4
              rounded-2xl
              bg-orange-500
              text-white
              font-semibold
              hover:bg-orange-600
              transition-all
            "
          >
            Join WhatsApp Community
          </a>
        </motion.div>
      </div>
    </section>
  )
}