"use client";

import { motion } from "framer-motion";

export default function TransformationSection() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-black
            px-8
            py-20
            md:px-16
            md:py-28
          "
        >
          {/* ORANGE GLOW */}

          <div
            className="
              absolute
              top-[-150px]
              right-[-100px]
              w-[400px]
              h-[400px]
              rounded-full
              bg-orange-500
              blur-3xl
              opacity-20
            "
          />

          {/* GRID */}

          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-[1fr_320px]
              gap-16
            "
          >
            {/* LEFT */}

            <div>
              <div
                className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-orange-400
                  font-semibold
                "
              >
                TRANSFORMATION
              </div>

              <h2
                className="
                  mt-8
                  text-[48px]
                  md:text-[82px]
                  font-black
                  tracking-[-0.06em]
                  leading-[0.92]
                  text-white
                "
              >
                Learn skills
                <br />
                that move your
                <br />
                future forward.
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-neutral-400
                "
              >
                Overstack is designed for ambitious learners who want practical
                skills, modern systems, and real opportunities in the technology
                industry.
              </p>
            </div>

            {/* RIGHT */}

            <div className="space-y-5">
              <DarkCard
                title="Modern skills"
                description="Focused on technologies that matter today."
              />

              <DarkCard
                title="Real learning"
                description="Practical systems, not outdated theory."
              />

              <DarkCard
                title="Future mindset"
                description="Built for creators, builders, and innovators."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* DARK CARD */

function DarkCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
      "
    >
      <h3
        className="
          text-xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          leading-relaxed
          text-neutral-400
        "
      >
        {description}
      </p>
    </div>
  );
}
