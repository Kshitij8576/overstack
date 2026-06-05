'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
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
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
          className="text-center"
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
            WHAT'S NEXT?
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-[42px]
              md:text-[72px]
              font-black
              tracking-[-0.06em]
              leading-[0.95]
            "
          >
            Ready to build
            <br />

            your future?
          </h2>

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
            Explore our learning programs or join
            the community and connect with people
            building the future of technology.
          </p>
        </motion.div>

        {/* Action Cards */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {/* Courses */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-neutral-200
              bg-white
              p-10
              transition-all
              duration-500
              hover:border-orange-200
              hover:shadow-[0_20px_60px_rgba(255,107,0,0.08)]
            "
          >
            <div
              className="
                absolute
                top-0
                right-0
                w-48
                h-48
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
              <div
                className="
                  text-sm
                  font-semibold
                  text-orange-500
                "
              >
                LEARN
              </div>

              <h3
                className="
                  mt-4
                  text-4xl
                  font-black
                  tracking-tight
                "
              >
                Explore
                Courses
              </h3>

              <p
                className="
                  mt-4
                  text-neutral-600
                  leading-relaxed
                "
              >
                Discover immersive programs in
                Full Stack Development, Cybersecurity,
                and Data Analytics with AI.
              </p>

              <Link
                href="/courses/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  font-semibold
                  text-orange-500
                "
              >
                View Courses

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </motion.div>

          {/* Community */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
              bg-black
              p-10
            "
          >
            <div
              className="
                absolute
                top-0
                right-0
                w-48
                h-48
                rounded-full
                bg-orange-500
                blur-3xl
                opacity-20
              "
            />

            <div className="relative z-10">
              <div
                className="
                  text-sm
                  font-semibold
                  text-orange-400
                "
              >
                CONNECT
              </div>

              <h3
                className="
                  mt-4
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Join the
                Community
              </h3>

              <p
                className="
                  mt-4
                  text-neutral-400
                  leading-relaxed
                "
              >
                Connect with learners, share ideas,
                discover opportunities, and grow
                alongside ambitious people.
              </p>

              <Link
                href="/community"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  font-semibold
                  text-orange-400
                "
              >
                Join Community

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}