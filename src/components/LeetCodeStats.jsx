import React, { useState, useEffect } from 'react';
import { fetchLeetCodeStats } from '../utils/leetcodeAPI';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Replace with your LeetCode username
  const username = 'Ujwal_Khairnar';

  useEffect(() => {
    const getStats = async () => {
      try {
        setLoading(true);
        const data = await fetchLeetCodeStats(username);
        setStats(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch LeetCode stats');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, [username]);

  if (loading) {
    return (
      <section id="stats" className="section leetcode-section">
        <div className="container">
          <h2 className="section-title">LeetCode Stats</h2>
          <div className="loading-spinner">Loading stats...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stats" className="section leetcode-section">
        <div className="container">
          <h2 className="section-title">LeetCode Stats</h2>
          <div className="error-message">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="stats" className="section leetcode-section">
      <div className="container">
        <h2 className="section-title">LeetCode Stats</h2>
        <p className="section-subtitle">My coding journey</p>
        
        <div className="leetcode-profile">
          <div className="profile-header">
            <img 
              src={stats?.avatar || 'https://via.placeholder.com/100'} 
              alt="Profile" 
              className="profile-avatar"
            />
            <div className="profile-info">
              <h3>{stats?.realName || username}</h3>
              <p className="username">@{username}</p>
              {stats?.ranking && <p className="ranking">Ranking: #{stats.ranking}</p>}
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card total">
              <h4>Total Solved</h4>
              <p className="stat-number">{stats?.totalSolved || 0}</p>
              <p className="stat-label">Problems</p>
            </div>
            
            <div className="stat-card easy">
              <h4>Easy</h4>
              <p className="stat-number">{stats?.easySolved || 0}</p>
              <p className="stat-label">/ {stats?.totalEasy || 0}</p>
            </div>
            
            <div className="stat-card medium">
              <h4>Medium</h4>
              <p className="stat-number">{stats?.mediumSolved || 0}</p>
              <p className="stat-label">/ {stats?.totalMedium || 0}</p>
            </div>
            
            <div className="stat-card hard">
              <h4>Hard</h4>
              <p className="stat-number">{stats?.hardSolved || 0}</p>
              <p className="stat-label">/ {stats?.totalHard || 0}</p>
            </div>
          </div>

          {stats?.streak && (
            <div className="streak-info">
              <p>🔥 Current Streak: <strong>{stats.streak} days</strong></p>
            </div>
          )}

          <div className="view-profile">
            <a 
              href={`https://leetcode.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-btn"
            >
              View Full Profile <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
