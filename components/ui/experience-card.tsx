"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  logo: string;
  content: string;
}

export function ExperienceCard({ company, role, date, logo, content }: ExperienceCardProps) {
  const [folioNo, setFolioNo] = useState<number | null>(null);

  useEffect(() => {
    setFolioNo(Math.floor(Math.random() * 100));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-[#fcfbf7] border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col group hover:shadow-md transition-shadow rounded-[3rem] overflow-hidden"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Newspaper Header - More compact */}
      <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-3 mb-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">Exclusive Feature</span>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 uppercase leading-none">{company}</h3>
        </div>
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 p-1 bg-white shrink-0 shadow-sm">
          <Image src={logo} alt={company} fill className="object-contain p-1.5" />
        </div>
      </div>

      {/* Headline - More compact */}
      <div className="mb-3">
        <h4 className="text-xl font-bold italic text-zinc-800 leading-tight">
          {role}
        </h4>
        <p className="text-[13px] text-zinc-500 mt-1 italic border-b border-zinc-200 pb-2">
          Documented on {date}
        </p>
      </div>

      {/* Article Content - Tighter typography */}
      <div className="text-zinc-700 leading-snug text-base text-justify space-y-3">
        <p>
          <span className="text-4xl float-left mr-2 mt-1 font-bold leading-none">{content.charAt(0)}</span>
          {content.slice(1)}
        </p>
      </div>

      {/* Footer Rule - Smaller text */}
      <div className="mt-6 pt-3 border-t border-zinc-300 flex justify-between items-center text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
        <span>Edition 2026</span>
        <span className="text-zinc-300">•</span>
        <span>Corporate Chronicles</span>
        <span className="text-zinc-300">•</span>
        <span>Folio No. {folioNo}</span>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
    </motion.div>
  );
}
