'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const courses = [
  {
    number: '01',
    title: 'Full Stack + AI',
    description:
      'From your first HTML tag to building production-ready applications with modern AI-powered development workflows.',

    applyLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSd0joqZj3ib-OI94Zwqlvn4K84F7bPP9r9V5gKENdfOTAL-gw/viewform?usp=dialog',

    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'MongoDB',
      'MERN Stack',
      'AI Coding',
    ],
  },

  {
    number: '02',
    title: 'Cybersecurity + AI',
    description:
      'Understand how modern systems operate, how attacks happen, and how professionals secure digital infrastructure.',

    applyLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSfmExzV4xjIUNbPx67KqrL3shSNOZ3wVkuIYfZUKSMPqfuwSg/viewform?usp=dialog',

    stack: [
      'Networking',
      'Linux',
      'OWASP',
      'Web Security',
      'Ethical Hacking',
      'Security Tools',
      'SOC Concepts',
      'AI Security',
    ],
  },

  {
    number: '03',
    title: 'Data Analytics + AI',
    description:
      'Turn raw information into meaningful business insights using modern analytics and AI-assisted workflows.',

    applyLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdg6Z1O8JIrP0X1ezYFIvfG64Yq_6vlbzwTJxTLMLwJ3vvNPg/viewform?usp=dialog',

    stack: [
      'Excel',
      'SQL',
      'Power BI',
      'Python',
      'Visualization',
      'Dashboards',
      'Business Analytics',
      'AI Analytics',
    ],
  },
]

export default function CourseShowcase() {
  return (
    <section id="courses" className="relative bg-white py-16 overflow-hidden">
      {/* Glow */}

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

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
            PROGRAMS
          </div>

          <h2
            className="
              mt-6
              text-[42px]
              md:text-[64px]
              font-black
              tracking-[-0.05em]
              leading-[1]
            "
          >
            Choose your
            <br />
            learning path.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-neutral-600
              leading-relaxed
              max-w-2xl
            "
          >
            Three immersive programs built for
            future developers, security professionals,
            and data-driven thinkers.
          </p>
        </motion.div>

        {/* Courses */}

        <div className="mt-20 space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
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
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-neutral-200
                bg-white
                p-8
                md:p-12
                transition-all
                duration-500
                hover:border-orange-200
                hover:shadow-[0_20px_80px_rgba(255,107,0,0.08)]
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  w-72
                  h-72
                  rounded-full
                  bg-orange-100
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

              <div className="relative z-10">
                {/* Number */}

                <div
                  className="
                    text-sm
                    font-semibold
                    text-orange-500
                  "
                >
                  {course.number}
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-4xl
                    md:text-6xl
                    font-black
                    tracking-[-0.05em]
                    leading-none
                  "
                >
                  {course.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-relaxed
                    text-neutral-600
                  "
                >
                  {course.description}
                </p>

                {/* Skills */}

                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {course.stack.map((skill) => (
                    <div
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-neutral-200
                        bg-neutral-50
                        text-sm
                        font-medium
                      "
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Bottom */}

               {/* Program Highlights */}

<div
  className="
    mt-10
    grid
    sm:grid-cols-2
    lg:grid-cols-4
    gap-4
  "
>
  <div className="rounded-2xl bg-orange-50 p-4">
    <div className="text-xs text-neutral-500 uppercase">
      Duration
    </div>

    <div className="mt-1 font-semibold">
      2 Months
    </div>
  </div>

  <div className="rounded-2xl bg-orange-50 p-4">
    <div className="text-xs text-neutral-500 uppercase">
      Live Classes
    </div>

    <div className="mt-1 font-semibold">
      1–1.5 Hrs Daily
    </div>
  </div>

  <div className="rounded-2xl bg-orange-50 p-4">
    <div className="text-xs text-neutral-500 uppercase">
      Projects
    </div>

    <div className="mt-1 font-semibold">
      5+ Real Projects
    </div>
  </div>

  <div className="rounded-2xl bg-orange-50 p-4">
    <div className="text-xs text-neutral-500 uppercase">
      Schedule
    </div>

    <div className="mt-1 font-semibold">
      6 Days / Week
    </div>
  </div>
</div>

{/* Benefits */}

<div
  className="
    mt-8
    flex
    flex-wrap
    gap-3
    text-sm
  "
>
  <span className="rounded-full bg-neutral-100 px-3 py-2">
    Complete Notes
  </span>

  <span className="rounded-full bg-neutral-100 px-3 py-2">
    Recorded Project Sessions
  </span>

  <span className="rounded-full bg-neutral-100 px-3 py-2">
    Internship Preparation
  </span>

  <span className="rounded-full bg-neutral-100 px-3 py-2">
    AI Integrated
  </span>

  <span className="rounded-full bg-neutral-100 px-3 py-2">
    Certificate
  </span>
</div>

{/* Pricing */}

<div
  className="
    mt-8
    flex
    flex-wrap
    items-center
    gap-4
  "
>
  <div className="text-neutral-400 line-through text-xl">
    ₹3,500
  </div>

  <div className="text-4xl font-black text-orange-500">
    ₹649
  </div>

  <div
    className="
      rounded-full
      bg-green-100
      px-3
      py-1
      text-sm
      font-medium
      text-green-700
    "
  >
    Limited Time Offer
  </div>
</div>

{/* Footer */}

<div
  className="
    mt-10
    flex
    flex-col
    md:flex-row
    md:items-center
    md:justify-between
    gap-6
  "
>
                  <div
                    className="
                      flex
                      flex-wrap
                      gap-3
                      text-sm
                      text-neutral-500
                    "
                  >
                    <span>Live Learning</span>
                    <span>•</span>
                    <span>Real Projects</span>
                    <span>•</span>
                    <span>AI Integrated</span>
                  </div>

                  <a
                    href={course.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/button
                      inline-flex
                      items-center
                      gap-3
                      px-6
                      py-3
                      rounded-2xl
                      bg-orange-500
                      text-white
                      font-semibold
                      transition-all
                      hover:bg-orange-600
                      hover:scale-[1.02]
                    "
                  >
                    Apply Now

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        group-hover/button:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}