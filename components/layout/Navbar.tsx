'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Courses',
    href: '/courses',
  },
  {
    name: 'Community',
    href: '/community',
  },
  {
    name: 'About',
    href: '/about',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        px-4
        md:px-6
        pt-4
      "
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          rounded-2xl
          border
          border-orange-100
          transition-all
          duration-500
          ${
            scrolled
              ? 'bg-white/80 backdrop-blur-2xl shadow-[0_10px_50px_rgba(255,107,0,0.12)]'
              : 'bg-white/60 backdrop-blur-xl'
          }
        `}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}

          <Link href="/">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                cursor-pointer
                text-3xl
                font-black
                tracking-tight
              "
            >
              OVER
              <span className="text-orange-500">
                STACK
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-10
            "
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{
                  y: -2,
                }}
              >
                <Link
                  href={item.href}
                  className="
                    text-sm
                    font-semibold
                    text-neutral-700
                    hover:text-orange-500
                    transition-colors
                  "
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}

          <div
            className="
              hidden
              lg:flex
              items-center
            "
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href="/community"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-5
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-orange-200
                  transition-all
                  hover:bg-orange-600
                "
              >
                Join Now

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              bg-orange-50
              flex
              items-center
              justify-center
            "
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                lg:hidden
                overflow-hidden
              "
            >
              <div
                className="
                  px-6
                  pb-6
                  flex
                  flex-col
                  gap-3
                "
              >
                {navItems.map(
                  (item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          setOpen(false)
                        }
                        className="
                          block
                          rounded-xl
                          px-4
                          py-3
                          font-semibold
                          text-neutral-700
                          hover:bg-orange-50
                        "
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                )}

                <Link
                  href="/community"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    mt-4
                    block
                    rounded-xl
                    bg-orange-500
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-orange-600
                  "
                >
                  Join Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}