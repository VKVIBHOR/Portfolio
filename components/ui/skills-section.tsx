"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Code2, Globe, Database, Terminal, BookOpen, Cpu, Sparkles, MessageSquare, Search, Sliders, Eye, Layers, Box, Zap, Server, GitBranch, Cog } from "lucide-react";

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
  image?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: React.ReactNode;
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "AI / ML",
    icon: <Brain className="w-5 h-5 text-blue-400" />,
    skills: [
      { name: "Machine Learning", icon: <Cpu className="w-4 h-4" /> },
      { name: "Deep Learning", icon: <Layers className="w-4 h-4" /> },
      { name: "Generative AI", icon: <Sparkles className="w-4 h-4" /> },
      { name: "PyTorch", image: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Scikit-learn", image: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "XGBoost", image: "https://cdn.simpleicons.org/xgboost/gray" },
      { name: "LangChain", image: "https://cdn.simpleicons.org/langchain/white" },
      { name: "Hugging Face", image: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "RAG", icon: <Database className="w-4 h-4" /> },
      { name: "Agentic AI", icon: <Zap className="w-4 h-4" /> },
      { name: "Prompt Engineering", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Model Fine-Tuning", icon: <Sliders className="w-4 h-4" /> },
      { name: "Explainable AI (XAI)", icon: <Eye className="w-4 h-4" /> },
    ],
  },
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-green-400" />,
    skills: [
      { name: "Python", image: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "NumPy", image: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Pandas", image: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Java", image: "https://cdn.simpleicons.org/openjdk/white" },
      { name: "C", image: "https://cdn.simpleicons.org/c/A8B9CC" },
      { name: "C++", image: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
  {
    title: "Web & APIs",
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: "React", image: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", image: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Flask", image: "https://cdn.simpleicons.org/flask/white" },
      { name: "HTML5", image: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", image: "https://cdn.simpleicons.org/css3/1572B6" },
      { name: "REST APIs", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    title: "Data & Viz",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    skills: [
      { name: "Feature Engineering", icon: <Cog className="w-4 h-4" /> },
      { name: "EDA", icon: <Search className="w-4 h-4" /> },
      { name: "Data Visualization", icon: <Box className="w-4 h-4" /> },
      { name: "Power BI", image: "https://cdn.simpleicons.org/powerbi/F2C811" },
      { name: "Workflow Automation", icon: <GitBranch className="w-4 h-4" /> },
    ],
  },
  {
    title: "Tools",
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: "Git", image: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", image: "https://cdn.simpleicons.org/github/white" },
      { name: "Figma", image: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "n8n", image: "https://cdn.simpleicons.org/n8n/FF6D5A" },
      { name: "FAISS", image: "https://cdn.simpleicons.org/meta/white" },
      { name: "Chroma", image: "https://cdn.simpleicons.org/chromadb/white" },
      { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
  },
  {
    title: "CS Fundamentals",
    icon: <BookOpen className="w-5 h-5 text-rose-400" />,
    skills: [
      { name: "Data Structures & Algorithms", icon: <Layers className="w-4 h-4" /> },
      { name: "OOP", icon: <Box className="w-4 h-4" /> },
      { name: "Problem Solving", icon: <Zap className="w-4 h-4" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section 
      className="relative min-h-screen py-24 px-6 sm:px-12 bg-black overflow-hidden"
      id="skills"
    >
      {/* Starry Night Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/starry-night.jpeg"
          alt="Skills Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* Balanced overlay for visibility and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-heading mb-4">
            Technical <span className="font-light italic text-blue-200">Matrix</span>
          </h2>
        </motion.div>

        <div className="w-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="hidden md:grid grid-cols-12 border-b border-white/10 bg-white/5 p-6">
            <div className="col-span-3 text-sm font-light uppercase tracking-[0.2em] text-white/40 font-heading">Category</div>
            <div className="col-span-9 text-sm font-light uppercase tracking-[0.2em] text-white/40 font-heading">Technologies & Expertise</div>
          </div>

          <div className="divide-y divide-white/10">
            {CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 hover:bg-white/[0.02] transition-colors group"
              >
                {/* Responsive Category Header */}
                <div className="col-span-1 md:col-span-3 flex items-center gap-4 mb-6 md:mb-0">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl text-white font-heading tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Container */}
                <div 
                  className="col-span-1 md:col-span-9 flex flex-wrap gap-2.5 sm:gap-3"
                  style={{ fontFamily: 'Calibri, sans-serif' }}
                >
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-base sm:text-lg text-white/80 hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {skill.image ? (
                        <img src={skill.image} alt={skill.name} className="w-4 h-4 object-contain brightness-0 invert opacity-70" />
                      ) : (
                        <span className="text-white/40">{skill.icon}</span>
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
