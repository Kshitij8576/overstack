'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need prior experience?',
    answer:
      'No. All programs are designed for beginners and gradually progress to advanced concepts and real-world projects.',
  },

  {
    question: 'Are the classes live?',
    answer:
      'Yes. Every program is delivered through interactive live sessions with practical learning and direct guidance.',
  },

  {
    question: 'Will I build projects?',
    answer:
      'Absolutely. Every learning path includes hands-on projects that help you build practical skills and a strong portfolio.',
  },

  {
    question: 'How is AI integrated into learning?',
    answer:
      'AI is embedded throughout the curriculum, helping students learn modern workflows used by developers, analysts, and security professionals.',
  },

  {
    question: 'Is placement assistance available?',
    answer:
      'Our focus is on building strong practical skills, projects, and industry readiness that improve career opportunities.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-orange-100
          blur-3xl
          opacity-30
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}

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
  className="text-center"
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
    FAQ
  </div>

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
    Still wondering?
    <br />

    <span className="text-orange-500">
      We've got answers.
    </span>
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
    Everything you need to know before
    starting your journey with Overstack.
  </p>
</motion.div>

        {/* FAQ List */}

        <div className="mt-20 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
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
                delay: index * 0.05,
              }}
              className="
                overflow-hidden
                rounded-[24px]
                border
                border-neutral-200
                bg-white
                
              "
            >
              <button
                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }
                className="
                  w-full
                  px-6
                  py-6
                  flex
                  items-center
                  justify-between
                  text-left
                "
              >
                <span
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                  "
                >
                  {faq.question}
                </span>

                <div
                  className="
                    text-orange-500
                  "
                >
                  {open === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div
                      className="
                        px-6
                        pb-6
                        text-neutral-600
                        leading-relaxed
                      "
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Line */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-16
            text-center
            text-neutral-500
          "
        >
          Still have questions? Reach out and we'll be happy to help.
        </motion.div>
      </div>
    </section>
  )
}