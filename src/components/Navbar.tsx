'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },  
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setMenuOpen] = useState(false)

  // Animate variants for mobile menu
  const menuVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  }

  // Animate variants for active underline
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: '100%', opacity: 1 },
  }

  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-emerald-400 hover:text-emerald-500 transition"
          aria-label="Homepage"
        >
          SAHASH CHAKMA
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`
                    inline-block px-1 py-2 transition-colors duration-200
                    ${
                      isActive
                        ? 'text-emerald-400 font-semibold'
                        : 'text-gray-300 hover:text-emerald-400'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {/* Animate underline */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={underlineVariants}
                        className="absolute left-0 -bottom-1 h-0.5 bg-emerald-400 rounded"
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            key="mobile-menu"
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-zinc-900 border-t border-zinc-800 shadow-md"
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href} className="border-b border-zinc-800 last:border-0">
                  <Link
                    href={href}
                    className={`
                      block px-6 py-3 transition-colors duration-150
                      ${
                        isActive
                          ? 'bg-emerald-500 bg-opacity-20 text-emerald-400 font-semibold'
                          : 'text-gray-300 hover:bg-emerald-500 hover:bg-opacity-20 hover:text-emerald-400'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
