"use client";

import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect,
  ReactNode
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue
} from "framer-motion";

// shared mouse position context
const MouseContext = createContext({ x: 0, y: 0 });

// SVG icons
const GithubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// individual icon with magnetic effect
function DockIcon({ icon, label }: { icon: ReactNode, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement?.getBoundingClientRect();
    if (containerRect) {
      const iconCenterX = iconRect.left + iconRect.width / 2;
      const mouseXAbsolute = containerRect.left + mouse.x;
      distance.set(Math.abs(mouseXAbsolute - iconCenterX));
    }
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 100], [64, 48]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative flex flex-col items-center">
      {/* Label/Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? -50 : 10,
          scale: isHovered ? 1 : 0.8 
        }}
        className="absolute pointer-events-none whitespace-nowrap rounded-md bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-medium text-white shadow-xl"
      >
        {label}
      </motion.div>

      <motion.div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: springW }}
        className="aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center text-white hover:bg-white/20 transition-colors cursor-pointer"
      >
        {icon}
      </motion.div>
    </div>
  );
}

// main dock
export default function MagneticDock() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="flex h-20 items-end gap-3 rounded-2xl bg-white/5 backdrop-blur-xl px-4 pb-4 border border-white/10 shadow-2xl"
      >
        <a href="https://github.com/VKVIBHOR" target="_blank" rel="noopener noreferrer">
          <DockIcon icon={<GithubIcon />} label="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/vibhor-koshal-1b4419318/" target="_blank" rel="noopener noreferrer">
          <DockIcon icon={<LinkedinIcon />} label="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <DockIcon icon={<TwitterIcon />} label="X (Twitter)" />
        </a>
        <a href="mailto:vibhorkoshal@gmail.com">
          <DockIcon icon={<MailIcon />} label="Email" />
        </a>
      </div>
    </MouseContext.Provider>
  );
}
