'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  id: string
}

/**
 * 3D Adaptive Navigation Pill
 * Smart navigation with hover expansion for 8 items
 */
export const PillBase: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [expanded, setExpanded] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isScrollingRef = useRef(false) // Flag to ignore observer during manual clicks
  const containerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Blog', id: 'blog' },
    { label: 'CV', id: 'cv' },
    { label: 'Contact', id: 'contact' },
  ]

  // Spring animations for smooth motion
  // Expanded width increased to 880 to accommodate 7 items comfortably
  const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 })
  const pillShift = useSpring(0, { stiffness: 220, damping: 25, mass: 1 })

  // Handle hover and section-based expansion
  useEffect(() => {
    // Automatically expand if hovering OR if we're on the home section
    const shouldExpand = hovering || activeSection === 'home';

    if (shouldExpand) {
      setExpanded(true)
      pillWidth.set(960) // Increased from 880 to accommodate 8 items
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    } else {
      // Small delay before contracting when leaving home or hover
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false)
        pillWidth.set(140)
      }, 600)
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [hovering, activeSection, pillWidth])

  // Handle scroll observation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the screen
      threshold: 0,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Don't update if we're in the middle of a manual scroll animation
      if (isScrollingRef.current) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // Observe all sections that have IDs matching our nav items
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, []) // navItems is static, so we can run this once

  const handleMouseEnter = () => {
    setHovering(true)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }

  const handleSectionClick = (sectionId: string) => {
    setIsTransitioning(true)
    setActiveSection(sectionId)
    setHovering(false)
    isScrollingRef.current = true // Disable observer updates

    // Smooth scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // Re-enable observer after the scroll animation is likely finished
    setTimeout(() => {
      isScrollingRef.current = false
      setIsTransitioning(false)
    }, 1000) // Increased timeout to cover scroll duration
  }

  const activeItem = navItems.find(item => item.id === activeSection)

  return (
    <motion.nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-full"
      style={{
        width: pillWidth,
        height: '56px',
        background: `
          linear-gradient(135deg, 
            rgba(252, 252, 253, 0.5) 0%, 
            rgba(248, 248, 250, 0.5) 15%, 
            rgba(243, 244, 246, 0.5) 30%, 
            rgba(238, 239, 242, 0.5) 45%, 
            rgba(233, 234, 237, 0.5) 60%, 
            rgba(228, 229, 232, 0.5) 75%, 
            rgba(222, 224, 227, 0.5) 90%, 
            rgba(226, 227, 230, 0.5) 100%
          )
        `,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: expanded
          ? `
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 6px 12px rgba(0, 0, 0, 0.12),
            0 12px 24px rgba(0, 0, 0, 0.14),
            0 24px 48px rgba(0, 0, 0, 0.10),
            inset 0 2px 2px rgba(255, 255, 255, 0.9),
            inset 0 -3px 8px rgba(0, 0, 0, 0.12),
            inset 3px 3px 8px rgba(0, 0, 0, 0.10),
            inset -3px 3px 8px rgba(0, 0, 0, 0.09),
            inset 0 -1px 2px rgba(0, 0, 0, 0.08)
          `
          : isTransitioning
            ? `
            0 3px 6px rgba(0, 0, 0, 0.10),
            0 8px 16px rgba(0, 0, 0, 0.08),
            0 16px 32px rgba(0, 0, 0, 0.06),
            0 1px 2px rgba(0, 0, 0, 0.10),
            inset 0 2px 1.5px rgba(255, 255, 255, 0.9),
            inset 0 -2px 6px rgba(0, 0, 0, 0.08),
            inset 2px 2px 8px rgba(0, 0, 0, 0.06),
            inset -2px 2px 8px rgba(0, 0, 0, 0.05),
            inset 0 0 1px rgba(0, 0, 0, 0.12),
            inset 0 0 20px rgba(255, 255, 255, 0.15)
          `
            : `
            0 3px 6px rgba(0, 0, 0, 0.12),
            0 8px 16px rgba(0, 0, 0, 0.10),
            0 16px 32px rgba(0, 0, 0, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.12),
            inset 0 2px 1.5px rgba(255, 255, 255, 0.8),
            inset 0 -2px 6px rgba(0, 0, 0, 0.10),
            inset 2px 2px 8px rgba(0, 0, 0, 0.08),
            inset -2px 2px 8px rgba(0, 0, 0, 0.07),
            inset 0 0 1px rgba(0, 0, 0, 0.15)
          `,
        x: pillShift,
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease-out',
      }}
    >

      {/* Hemisphere and gloss effects */}
      <div
        className="absolute inset-x-0 top-0 rounded-full pointer-events-none"
        style={{
          height: '55%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.10) 60%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Navigation items container */}
      <div
        ref={containerRef}
        className="relative z-10 h-full flex items-center justify-center px-6"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro", sans-serif',
        }}
      >
        {!expanded && (
          <div className="flex items-center relative">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.span
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    fontSize: '15.5px',
                    fontWeight: 680,
                    color: '#1a1a1a',
                    letterSpacing: '0.45px',
                    whiteSpace: 'nowrap',
                    textShadow: '0 1px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  {activeItem.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        )}

        {expanded && (
          <div className="flex items-center justify-evenly w-full gap-2">
            {navItems.map((item, index) => {
              const isActive = item.id === activeSection

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => handleSectionClick(item.id)}
                  className="relative cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg hover:bg-black/10"
                  style={{
                    fontSize: isActive ? '15.5px' : '14.5px',
                    fontWeight: isActive ? 680 : 550,
                    color: isActive ? '#1a1a1a' : '#3a3a3a',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    whiteSpace: 'nowrap',
                    transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
                  }}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </div>
        )}
      </div>
    </motion.nav>
  )
}
