'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  'Home',
  'Courses',
  'Community',
  'Resources',
  'About',
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
    >
      <div
        className={`
          max-w-7xl mx-auto
          transition-all duration-500
          border border-orange-100
          ${
            scrolled
              ? 'bg-white/80 backdrop-blur-2xl shadow-[0_10px_50px_rgba(255,107,0,0.12)]'
              : 'bg-white/60 backdrop-blur-xl'
          }
          rounded-2xl
        `}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black tracking-tight cursor-pointer"
          >
            OVER<span className="text-orange-500">STACK</span>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                className="relative text-sm font-semibold text-neutral-700 hover:text-orange-500 transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-5 py-3 rounded-xl border border-neutral-200 hover:border-orange-300 hover:bg-orange-50 transition-all font-semibold">
              Free Workshop
            </button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                bg-orange-500
                hover:bg-orange-600
                transition-all
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                shadow-lg
                shadow-orange-200
              "
            >
              Join Now

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
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
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-6 pb-6 flex flex-col gap-3">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="
                      text-left
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-orange-50
                      font-semibold
                      text-neutral-700
                    "
                  >
                    {item}
                  </motion.button>
                ))}

                <button
                  className="
                    mt-4
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    transition-all
                  "
                >
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}