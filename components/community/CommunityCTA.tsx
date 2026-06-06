'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function CommunityCTA() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-32">
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
          opacity-20
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
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
        >
          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-orange-400
            "
          >
            COMMUNITY
          </div>

          {/* Heading */}

          <h2
            className="
              mt-8
              text-[42px]
              md:text-[82px]
              font-black
              tracking-[-0.06em]
              leading-[0.95]
              text-white
            "
          >
            Ready to join?
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            Connect with learners, discover
            opportunities, get updates, and grow
            alongside a community that shares
            your ambition.
          </p>

          {/* Stats */}

          <div
            className="
              mt-14
              flex
              flex-wrap
              justify-center
              gap-10
            "
          >
            <Stat value="24/7" label="Community Access" />
            <Stat value="100%" label="Free to Join" />
            <Stat value="∞" label="Learning Opportunities" />
          </div>

          {/* CTA */}

          <a
            href="https://chat.whatsapp.com/BqtMm0QjeSdF3yyeWqKKJD"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              mt-14
              px-8
              py-4
              rounded-2xl
              bg-orange-500
              text-white
              font-semibold
              transition-all
              hover:bg-orange-600
              hover:scale-[1.03]
            "
          >
            <MessageCircle size={20} />

            Join WhatsApp Community
          </a>

          {/* Trust Line */}

          <div
            className="
              mt-8
              text-sm
              text-neutral-500
            "
          >
            Developers • Security Learners • Data Enthusiasts
          </div>
        </motion.div>
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
          text-white
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