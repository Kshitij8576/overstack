'use client'

import { motion } from 'framer-motion'

const courses = [
  'Full Stack + AI',
  'Cybersecurity + AI',
  'Data Analytics + AI',
]

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
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
        <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-center">
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
              COURSES
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
  Learn{' '}
  <span className="text-orange-500">
    modern <br /> skills.
  </span>
  <br />

  Build{' '}
  <span className="text-orange-500">
    modern careers.
  </span>
</h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-neutral-600
              "
            >
              Three immersive learning paths designed
              for future developers, security professionals,
              and data-driven thinkers.
            </p>
          </motion.div>

          <div className="space-y-5">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="
                  rounded-[24px]
                  border
                  border-neutral-200
                  bg-white
                  p-6
                "
              >
                <div className="text-orange-500 text-sm font-semibold">
                  0{index + 1}
                </div>

                <div className="mt-3 text-2xl font-bold">
                  {course}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}