export default async function handler(req, res) {
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            reputation
            ranking
            userAvatar
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { username: "Ujwal_Khairnar" },
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching LeetCode data:", err);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
