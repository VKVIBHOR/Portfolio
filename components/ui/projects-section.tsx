"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectCard } from "@/components/ui/project-card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Delhi Pollution Analysis & Forecasting",
      description: "Predict Delhi's air quality with ML-powered AQI forecasting (Random Forest) and simulate real-world impact of pollution control policies using Regression & Simulation Models.",
      detailedContent: `Delhi Pollution Analysis & Forecasting is an interactive web application designed to combat one of India's most pressing environmental challenges: air pollution. This project combines machine learning, data science, and interactive visualization to provide actionable insights into Delhi's air quality and predict future pollution levels.\n\nCore Features:\n🔮 ML-Powered AQI Forecasting: Implements Random Forest machine learning models trained on historical air quality data.\n📊 Policy Impact Simulation: Models the effects of various pollution control strategies (vehicle restrictions, industrial controls).\n📈 Rankings & Insights: Identifies the most effective pollution control strategies.\n🌐 Interactive Dashboard: Real-time data visualization using interactive charts.`,
      image: "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=1000",
      techStack: ["Python", "Machine Learning", "scikit-learn", "Random Forest", "APIs"],
      repoUrl: "https://github.com/VKVIBHOR/Delhi-pollution-analysis",
      className: "lg:col-span-2"
    },
    {
      title: "Fake News Detector",
      description: "Machine learning platform detecting misinformation in real-time using NLP & Text Classification (TF-IDF + Ensemble Methods) across multiple domains.",
      detailedContent: `Fake News Detector is an ML-powered platform designed to identify and classify misinformation in the digital age. This project leverages machine learning and NLP to automatically detect fake news with high accuracy.\n\nCore Features:\n🤖 Intelligent Text Analysis: Uses ML to analyze linguistic patterns and emotional manipulation.\n📊 Confidence Scoring: Provides probability scores for prediction confidence.\n⚡ Real-Time Detection: Processes articles instantly for reliable access.\n🔍 Multi-Domain Coverage: Trained across politics, science, health, and finance.`,
      image: "/projects/fake-news-detector.png",
      techStack: ["Python", "Flask", "NLTK", "scikit-learn", "React", "Next.js"],
      repoUrl: "https://github.com/VKVIBHOR/Fake-News-Detector",
      demoUrl: "https://fake-news-detector-alpha-two.vercel.app/",
      className: "lg:col-span-1"
    },
    {
      title: "AI Health Lab",
      description: "Comprehensive medical Deep Learning platform predicting heart disease, diabetes, pneumonia, tumors & skin cancer via CNNs, SVM, Gradient Boosting on medical imaging & tabular data.",
      detailedContent: `AI Health Lab is a comprehensive medical AI platform that democratizes healthcare by providing intelligent disease prediction and health monitoring capabilities.\n\nCore Features:\n🫀 Disease Prediction Models: Heart, Diabetes, Pneumonia, Brain Tumor & Skin Cancer detectors.\n👤 Digital Twin Technology: Creates personalized health simulations based on patient data.\n📊 Health Analytics Dashboard: Visualizes health trends over time.\n🏥 Hospital Locator: Integrates location services to find nearby facilities.`,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000",
      techStack: ["Streamlit", "Python", "TensorFlow", "Computer Vision", "OpenCV"],
      repoUrl: "https://github.com/VKVIBHOR/AI-Health-Lab",
      className: "lg:col-span-1"
    },
    {
      title: "SOP Training System",
      description: "Transforms SOPs into interactive training using Large Language Models (LLMs via OpenRouter) for Generative AI content and quiz creation.",
      detailedContent: `The SOP Training System is an innovative AI-powered platform that transforms boring Standard Operating Procedures (SOPs) into engaging, interactive training content using advanced LLMs.\n\nCore Features:\n📄 SOP-to-Training: Instantly convert any SOP document into structured modules.\n👣 Step-by-Step Guides: Numbered procedural logic for complex operations.\n📋 Intelligent Quiz Gen: Evaluation questions matching learning objectives.\n📈 Progress Tracking: Real-time assessment of learner performance.`,
      image: "/projects/sop-training.png",
      techStack: ["Python", "Streamlit", "OpenRouter API", "LLMs", "PyPDF2"],
      repoUrl: "https://github.com/VKVIBHOR/sop-training-system",
      className: "lg:col-span-2"
    },
    {
      title: "Pixel Art Maker",
      description: "Browser-based pixel art editor with advanced drawing tools, mirror symmetry, and instant import/export—Pure Frontend (HTML5 Canvas API), no ML/AI.",
      detailedContent: `Pixel Art Maker is a lightweight, browser-based pixel art editor. Perfect for artists, game developers, icon designers, and hobbyists to create beautiful pixel art instantly.\n\nCore Features:\n🎨 Drawing Tools: Pencil, Eraser, Bucket Fill, and Dual Color system.\n🔄 Mirror Drawing: Horizontal, Vertical, and 4-Way symmetry modes.\n💾 Save & Load: Persistence in LocalStorage for private project management.\n📤 Export Artwork: Pixel-perfect PNG export for game engines.`,
      image: "/projects/pixel-art-maker.png",
      techStack: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Vercel"],
      repoUrl: "https://github.com/VKVIBHOR/Pixel-Art-Maker",
      demoUrl: "https://pixel-art-maker-alpha.vercel.app/",
      className: "lg:col-span-2"
    },
    {
      title: "Data Ingestion & Analytics Pipeline",
      description: "End-to-end ETL Pipeline integrating REST APIs and CSV data into SQLite with Data Transformation, SQL Analytics & Matplotlib Visualization—no ML component.",
      detailedContent: `Data Ingestion & Analytics Pipeline is a production-ready ETL system that demonstrates the complete data journey from diverse sources to visualization.\n\nCore Features:\n📥 Extraction Layer: JSON APIs and CSV ingestion with robust error handling.\n🔄 Transformation: Cleaning, schema validation, and deduplication.\n💾 Storage Layer: Optimized SQLite database with relational mapping.\n📊 Analytics Layer: Complex SQL queries for descriptive and statistical insights.\n📈 Visualization: Dashboard-style storytelling using Matplotlib.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      techStack: ["Python", "Pandas", "SQLite3", "Matplotlib", "ETL"],
      repoUrl: "https://github.com/VKVIBHOR/data-ingestion-analytics",
      className: "lg:col-span-1"
    }
  ];

  return (
    <section className="relative min-h-screen py-12 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden bg-black" style={{ fontFamily: 'Calibri, sans-serif' }}>
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/starry-night.jpeg"
          alt="Projects Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        {/* Deep dark overlay for atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
