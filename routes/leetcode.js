import express from 'express';
const router = express.Router();

// LeetCode API endpoint
router.get('/leetcode', async (req, res) => {
  const { username } = req.query;
  
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('LeetCode API error:', error);
    res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
  }
});

export default router;
