'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Panto',
    category: 'Furniture E-Commerce',
    description:
      'A premium furniture showcase focused on minimalist aesthetics, modern interiors, and a seamless product discovery experience.',
    image: '/projects/panto.png',
    url: 'https://panto-ks-new.netlify.app/',
  },

  {
    number: '02',
    title: 'Aayu',
    category: 'AI Healthcare Platform',
    description:
      'An AI-powered health companion designed to make advanced healthcare more accessible through medical analysis, intelligent recommendations, and personalized health insights.',
    image: '/projects/aayu.png',
    url: 'https://aayu-dli.vercel.app/',
  },

  {
    number: '03',
    title: 'CyberShield',
    category: 'Cyber Awareness Initiative',
    description:
      'A national cyber awareness platform built for Naksh Foundation, focused on digital safety, cyber education, legal awareness, and responsible online practices.',
    image: '/projects/cybershield.png',
    url: 'https://the-cyber-shield-project.vercel.app/',
  },

  {
    number: '04',
    title: 'OASIS',
    category: 'Creative Agency Website',
    description:
      'A modern agency experience created to showcase branding, design, and digital services through bold visuals and conversion-focused storytelling.',
    image: '/projects/oasis.png',
    url: 'https://oasis-ks.netlify.app/',
  },

]

export default function ProjectShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
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
          opacity-30
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            SELECTED WORK
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
            Work that earns
            attention.
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-neutral-600
              leading-relaxed
            "
          >
            A glimpse into the websites,
            brands, and digital experiences
            we create.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="mt-24 space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className={`
                grid
                lg:grid-cols-2
                gap-10
                items-center
                ${
                  index % 2 === 1
                    ? 'lg:[&>*:first-child]:order-2'
                    : ''
                }
              `}
            >
              {/* Image */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-neutral-200
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1400}
                  height={900}
                  className="
                    w-full
                    h-auto
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <div>
                <div
                  className="
                    text-sm
                    font-semibold
                    text-orange-500
                  "
                >
                  {project.number}
                </div>

                <div
                  className="
                    mt-3
                    inline-flex
                    rounded-full
                    bg-orange-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-orange-600
                  "
                >
                  {project.category}
                </div>

                <h3
                  className="
                    mt-6
                    text-4xl
                    md:text-6xl
                    font-black
                    tracking-tight
                    leading-none
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-lg
                    leading-relaxed
                    text-neutral-600
                  "
                >
                  {project.description}
                </p>

                <div
  className="
    mt-8
    inline-flex
    rounded-full
    bg-orange-50
    px-4
    py-2
    text-sm
    font-medium
    text-orange-600
  "
>
  Built by Overstack
</div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}