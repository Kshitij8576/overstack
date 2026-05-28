'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const courses = [
  {
    number: '01',
    title: 'Full Stack Development',
    description:
      'Modern frontend, backend, APIs, databases, and real-world projects.',
  },
  {
    number: '02',
    title: 'Data Analytics',
    description:
      'Data visualization, dashboards, analysis, and business intelligence.',
  },
  {
    number: '03',
    title: 'Cybersecurity',
    description:
      'Ethical hacking, networking, security systems, and cyber defense.',
  },
]

export default function CoursesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16">
      {/* BACKGROUND GLOW */}

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TOP */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
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
            COURSES
          </div>

          <h2
            className="
              mt-6
              text-[42px]
              md:text-[64px]
              font-black
              tracking-[-0.05em]
              leading-[1]
              text-black
            "
          >
            Choose your
            <br />
            learning path.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-600
            "
          >
            Practical live programs designed for
            creators, developers, and ambitious
            learners building modern careers.
          </p>
        </motion.div>

        {/* STACK */}

        <div className="mt-10 space-y-5">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-neutral-200
                bg-white
                transition-all
                duration-500
                hover:border-orange-200
                hover:shadow-[0_20px_60px_rgba(255,107,0,0.08)]
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-orange-50
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* CONTENT */}

              <div
                className="
                  relative
                  z-10
                  p-8
                  md:p-10
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    justify-between
                    gap-8
                  "
                >
                  {/* LEFT */}

                  <div>
                    <div
                      className="
                        text-sm
                        font-semibold
                        text-orange-500
                      "
                    >
                      {course.number}
                    </div>

                    <h3
                      className="
                        mt-4
                        text-3xl
                        md:text-5xl
                        font-black
                        tracking-[-0.05em]
                        leading-none
                      "
                    >
                      {course.title}
                    </h3>
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      hidden
                      md:flex
                      w-14
                      h-14
                      rounded-full
                      border
                      border-neutral-200
                      items-center
                      justify-center
                      text-neutral-700
                      group-hover:bg-orange-500
                      group-hover:border-orange-500
                      group-hover:text-white
                      transition-all
                      duration-500
                    "
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* DESCRIPTION */}

                <div
                  className="
                    mt-8
                    max-w-2xl
                  "
                >
                  <p
                    className="
                      text-lg
                      leading-relaxed
                      text-neutral-600
                    "
                  >
                    {course.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}