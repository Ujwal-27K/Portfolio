import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  // Programming Languages
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  // Frontend
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
  { name: "Material-UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },

  // Backend
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  // Tools & Platforms
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["C++", "Python", "SQL"] },
    { title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React", "Vite", "Material-UI"] },
    { title: "Backend Development", items: ["Node.js", "Express", "Flask"] },
    { title: "Databases", items: ["MongoDB", "MySQL"] },
  ],
  [
    { title: "APIs & Integrations", items: ["RESTful APIs", "JWT Authentication", "Cloudinary Integration"] },
    { title: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Power BI"] },
    {
      title: "Core Concepts",
      items: [
        "Full Stack Web Development (MERN)",
        "Data Visualization",
        "ETL Pipelines",
        "Performance Optimization",
      ],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Adaptability", "Creativity", "Communication"],
    },
  ],
];


export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">
      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl text-cyan-400 font-semibold mb-3">My Skills</h2>
        <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          ✨ Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* Floating Orbs with page-load + hover highlight animation */}
      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "550px",
          borderRadius: "25px",
          background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          overflow: "hidden",
          boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
          position: "relative",
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
              background: "rgba(0,255,255,0.12)",
            }}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,255,255,0.06)",
              border: "1px solid rgba(0,255,255,0.25)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              transition: "box-shadow 0.4s ease, background 0.4s ease",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 8px rgba(0,255,255,0.4)) brightness(1.2)",
                marginBottom: "5px",
              }}
              whileHover={{
                filter: "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)",
                rotate: [0, 6, -6, 0],
                transition: { duration: 0.5 },
              }}
            />
            <span
              style={{
                color: "rgba(180,255,255,0.9)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.3px",
              }}
            >
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table (Text Section) */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
