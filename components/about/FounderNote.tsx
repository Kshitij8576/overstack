'use client'

import { motion } from 'framer-motion'

export default function FounderNote() {
  return (
    <section className="relative bg-black py-16 overflow-hidden">
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

<div
  className="
    absolute
    inset-0
    opacity-[0.03]
    bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
    bg-[size:80px_80px]
  "
/>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Label */}

          <div
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-orange-500
              font-semibold
            "
          >
            WHY WE STARTED
          </div>

          {/* Heading */}

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
           Technology moves fast.
<br />

<span className="text-orange-400">
  Education should too.
</span>
          </h2>

          {/* Content */}

          <div
            className="
              mt-10
              max-w-3xl
              mx-auto
              space-y-6
              text-lg
              leading-relaxed
              text-neutral-400
            "
          >
            <p>
              Traditional education often struggles
              to keep pace with the speed of modern
              technology and industry change.
            </p>

            <p>
              Overstack was created to bridge that gap
              through live learning, real projects,
              AI-powered workflows, and practical
              skills that prepare students for the
              future.
            </p>
          </div>

          {/* Quote */}

          <div
  className="
    mt-14
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
  Education should evolve as fast as technology.
</div>
        </motion.div>
      </div>
    </section>
  )
}