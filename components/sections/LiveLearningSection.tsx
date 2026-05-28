'use client'

import { motion } from 'framer-motion'
import {
  Mic,
  Video,
  Users,
} from 'lucide-react'

export default function LiveLearningSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* GLOW */}

      <div
        className="
          absolute
          left-[-200px]
          bottom-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-40
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            grid
            lg:grid-cols-[0.8fr_1.2fr]
            gap-12
            items-center
          "
        >
          {/* LEFT */}

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
              LIVE LEARNING
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
              Learn with
              <br />
              real people,
              <br />
              live.
            </h2>

            <p
              className="
                mt-6
                max-w-md
                text-lg
                leading-relaxed
                text-neutral-600
              "
            >
              Interactive live sessions focused
              on collaboration, problem solving,
              and practical understanding.
            </p>
          </motion.div>

          {/* RIGHT */}

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
              delay: 0.1,
              duration: 0.7,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-neutral-200
              bg-[#fafafa]
              p-8
              md:p-10
              transition-all
              duration-500
              hover:border-orange-200
              hover:shadow-[0_20px_80px_rgba(255,107,0,0.08)]
            "
          >
            {/* GLOW */}

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

            {/* TOP BAR */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
              "
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-orange-100
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-orange-600
                "
              >
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Live Session
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div className="relative z-10 mt-12">
              <div
                className="
                  aspect-[16/9]
                  rounded-[28px]
                  border
                  border-neutral-200
                  bg-white
                  p-6
                  flex
                  flex-col
                  justify-between
                "
              >
                {/* TOP */}

                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="
                        text-sm
                        font-medium
                        text-neutral-500
                      "
                    >
                      OVERSTACK CLASSROOM
                    </div>

                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-black
                        tracking-tight
                      "
                    >
                      Full Stack
                      Bootcamp
                    </h3>
                  </div>

                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-orange-500
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Video size={20} />
                  </div>
                </div>

                {/* BOTTOM */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-4
                  "
                >
                  <MiniStat
                    icon={<Users size={16} />}
                    text="42 Students"
                  />

                  <MiniStat
                    icon={<Mic size={16} />}
                    text="Interactive Session"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* MINI STAT */

function MiniStat({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-neutral-200
        bg-[#fafafa]
        px-4
        py-2
        text-sm
        font-medium
        text-neutral-700
      "
    >
      {icon}
      {text}
    </div>
  )
}