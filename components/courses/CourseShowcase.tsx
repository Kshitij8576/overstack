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
      'YOUR_GOOGLE_FORM_LINK',

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
      'YOUR_GOOGLE_FORM_LINK',

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
      'YOUR_GOOGLE_FORM_LINK',

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
    <section className="relative bg-white py-16 overflow-hidden">
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

                <div
                  className="
                    mt-12
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