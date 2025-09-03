const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const username = req.query.username;
  if (!username) {
    res.status(400).json({ error: 'Missing username' });
    return;
  }

  const query = `
    query userStats($username:String!) {
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
        }
      }
    }
  `;

  const variables = { username };

  try {
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    const json = await response.json();

    if(json.errors) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(json.data.matchedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
