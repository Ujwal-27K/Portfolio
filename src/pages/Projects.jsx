import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: "🛒 MERN E-Commerce Platform",
    desc: "Full-stack e-commerce web app with secure JWT authentication, admin dashboard, Cloudinary uploads, and optimized REST APIs for smooth shopping experiences.",
    ss: "https://media.geeksforgeeks.org/wp-content/uploads/20240319013954/Screenshot-2024-03-19-013706.png",
    tech: ["React", "Redux Toolkit", "Material-UI", "Node.js", "Express", "MongoDB Atlas", "JWT", "Cloudinary"],
    live: "https://mern-ecommerce-platform-azure.vercel.app",
    code: "https://github.com/Ujwal-27K/mern-ecommerce-platform",
  },
  {
    title: "📊 Online Retail Insights",
    desc: "Interactive analytics dashboard for UCI Online Retail II dataset featuring ETL pipelines, Flask REST API, WebSocket updates, and React-based visualizations.",
    ss: "https://res.cloudinary.com/dx42z76dx/image/upload/v1757171870/Screenshot_2025-09-06_204706_ttiz8w.png",
    tech: ["React", "Flask", "Material-UI", "MySQL", "Pandas"],
    live: "https://online-retail-insights.vercel.app/",
    code: "https://github.com/Ujwal-27K/online-retail-insights",
  },
  {
    title: "🌦️ Weather Forecast Dashboard",
    desc: "PWA-enabled weather app with real-time 5-day forecasts, air quality data, and offline support using WeatherAPI.com and React.",
    ss: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651171/Screenshot_2025-08-31_200847_dvtklm.png",
    tech: ["React", "Vite", "JavaScript", "CSS3", "WeatherAPI.com"],
    live: "https://weather-forecast-dashboard-iota.vercel.app",
    code: "https://github.com/Ujwal-27K/weather-forecast-dashboard",
  },
  {
    title: "🎨 Color Palette Generator",
    desc: "AI-powered color palette generator using Colormind API with color locking, keyboard shortcuts, and responsive grid layout.",
    ss: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651170/Screenshot_2025-08-31_200900_vieuqr.png",
    tech: ["React", "Vite", "CSS3", "Colormind API", "JavaScript"],
    live: "https://color-palette-generator-ebon-chi.vercel.app/",
    code: "https://github.com/Ujwal-27K/color-palette-generator",
  },
  {
    title: "❌⭕ Tic Tac Toe Game",
    desc: "Classic two-player Tic Tac Toe with live win detection, responsive grid, and interactive React components for smooth gameplay.",
    ss: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651170/Screenshot_2025-08-31_200814_hjkvrx.png",
    tech: ["JavaScript", "CSS3", "HTML5"],
    live: "https://tic-tac-toe-delta-six-98.vercel.app",
    code: "https://github.com/Ujwal-27K/tic-tac-toe",
  },
  {
    title: "💼 Portfolio Website",
    desc: "Responsive developer portfolio showcasing projects, skills, and experience with smooth animations and modern UI interactions.",
    ss: "https://res.cloudinary.com/dx42z76dx/image/upload/v1762963856/Screenshot_2025-11-12_214032_s7bj1q.png",
    tech: ["JavaScript", "CSS3", "HTML5"],
    live: "https://portfolio-eta-blush-qsq9j1ksqi.vercel.app",
    code: "https://github.com/Ujwal-27K/Portfolio",
  },
  {
    title: "😂 Joke Telling Bot",
    desc: "Voice-enabled joke bot using Web Speech API and JokeAPI — supports speech recognition, multiple voices, and customizable dark UI.",
    ss: "https://res.cloudinary.com/dx42z76dx/image/upload/v1757513043/Screenshot_2025-09-10_193234_uukxb4.png",
    tech: ["React", "Web Speech API", "JavaScript", "CSS3", "JokeAPI"],
    live: "https://joke-telling-bot-rho.vercel.app/",
    code: "https://github.com/Ujwal-27K/joke-telling-bot",
  },
];



export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
