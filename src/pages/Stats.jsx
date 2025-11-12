import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/leetcode");
        const data = await response.json();

        if (data?.data?.matchedUser) {
          setStats(data.data.matchedUser);
          setLastUpdated(new Date().toLocaleString());
        } else {
          setStats(null);
        }
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#00b4ff",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          ⏳ Fetching LeetCode Stats...
        </motion.h2>
      </section>
    );
  }

  if (!stats) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "4rem",
        }}
      >
        ❌ Couldn’t load stats. Please try again later.
      </div>
    );
  }

  const easy = stats.submitStats.acSubmissionNum[1]?.count || 0;
  const medium = stats.submitStats.acSubmissionNum[2]?.count || 0;
  const hard = stats.submitStats.acSubmissionNum[3]?.count || 0;
  const total = stats.submitStats.acSubmissionNum[0]?.count || 0;

  const chartData = [
    { name: "Easy", value: easy },
    { name: "Medium", value: medium },
    { name: "Hard", value: hard },
  ];

  const COLORS = ["#00ff9d", "#ffc300", "#ff5757"];

  return (
    <section
      style={{
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.5rem",
          color: "#00b4ff",
          marginBottom: "1rem",
        }}
      >
        💻 LeetCode Stats
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,180,255,0.2)",
          textAlign: "center",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <img
          src={stats.profile.userAvatar}
          alt="Avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #00b4ff",
            marginBottom: "1rem",
          }}
        />
        <h2>@{stats.username}</h2>
        <p>🏆 Reputation: {stats.profile.reputation}</p>
        <p>📊 Global Rank: {stats.profile.ranking}</p>

        <hr
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            margin: "1rem 0",
          }}
        />

        {/* Stats Counters */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "1.5rem",
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 style={{ color: "#0f0" }}>Easy</h3>
            <p>{easy}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 style={{ color: "#ff0" }}>Medium</h3>
            <p>{medium}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 style={{ color: "#f00" }}>Hard</h3>
            <p>{hard}</p>
          </motion.div>
        </div>

        {/* Charts */}
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: "100%", height: 250, marginTop: "2rem" }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="value" fill="#00b4ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "1.5rem", color: "#00b4ff" }}
        >
          ✅ Total Solved: {total}
        </motion.h2>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#aaa" }}>
          ⏱ Last updated: {lastUpdated}
        </p>
      </motion.div>
    </section>
  );
}
