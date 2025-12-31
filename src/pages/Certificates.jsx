import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Front End Web Development Ultimate Guide",
      org: "Udemy",
      date: "2023",
      img: "https://udemy-certificate.s3.amazonaws.com/image/UC-909a5dd7-cec3-40b9-bc1b-e10d634084a9.jpg?v=1697136937000",
      link: "https://ude.my/UC-909a5dd7-cec3-40b9-bc1b-e10d634084a9",
    },
    {
      title: "Beginning C++ Programming - From Beginner To Beyond",
      org: "Udemy",
      date: "2023",
      img: "https://udemy-certificate.s3.amazonaws.com/image/UC-15fb8846-81f6-45a0-ab08-74a2da917f92.jpg?v=1690802586000",
      link: "https://ude.my/UC-15fb8846-81f6-45a0-ab08-74a2da917f92",
    },
    {
      title: "SQL (Intermediate) Certificate",
      org: "HackerRank",
      date: "2024",
      img: "https://res.cloudinary.com/dx42z76dx/image/upload/v1757236028/SQL_INTERMEDIATE_gqmspt.png",
      link: "https://www.hackerrank.com/certificates/1ad4f32511f0",
    },
    {
      title: "5-Day AI Agents Intensive Course with Google",
      org: "Kaggle",
      date: "2025",
      img: "https://res.cloudinary.com/dx42z76dx/image/upload/v1767162301/5-Day_AI_Agents_Intensive_Course_with_Google_w4awby.png",
      link: "https://www.kaggle.com/certification/badges/ujwalkhairnar27/105",
    },
  ],
  other: [
    {
      title: "Merit Certificate - Naukri Young Turks 2025 (Round 1)",
      org: "Naukri.com",
      date: "2025",
      img: "https://media.naukri.com/media/nccontcert/l444%253ALuAMAkberXd6ftfGICBJa5k1xXsoI809hlJ%252Bl9AwszwzVCFW1rojOjW9r73jMOPPU44%253D",
      link: "https://www.naukri.com/campus/certificates/young_turks25_round_1_achievement/v0/68d9c57d7659006d373b3dba?utm_source=certificate&utm_medium=copy&utm_campaign=68d9c57d7659006d373b3dba",
    },
  ],
};



export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
