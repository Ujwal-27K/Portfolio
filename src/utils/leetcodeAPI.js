// LeetCode GraphQL API utility functions
const LEETCODE_GRAPHQL_ENDPOINT = 'https://leetcode.com/graphql';

export const fetchLeetCodeStats = async (username) => {
  const query = `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          userAvatar
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  try {
    const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const userStats = data.data.matchedUser;
    const allQuestions = data.data.allQuestionsCount;

    // Parse submission stats
    const submissions = userStats.submitStats.acSubmissionNum;
    const totalSolved = submissions.find(s => s.difficulty === 'All')?.count || 0;
    const easySolved = submissions.find(s => s.difficulty === 'Easy')?.count || 0;
    const mediumSolved = submissions.find(s => s.difficulty === 'Medium')?.count || 0;
    const hardSolved = submissions.find(s => s.difficulty === 'Hard')?.count || 0;

    // Parse total questions
    const totalEasy = allQuestions.find(q => q.difficulty === 'Easy')?.count || 0;
    const totalMedium = allQuestions.find(q => q.difficulty === 'Medium')?.count || 0;
    const totalHard = allQuestions.find(q => q.difficulty === 'Hard')?.count || 0;

    return {
      username: userStats.username,
      realName: userStats.profile.realName,
      avatar: userStats.profile.userAvatar,
      ranking: userStats.profile.ranking,
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      totalEasy,
      totalMedium,
      totalHard,
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    throw error;
  }
};

// Alternative: Fetch contest ranking info
export const fetchContestRanking = async (username) => {
  const query = `
    query userContestRankingInfo($username: String!) {
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        topPercentage
      }
    }
  `;

  try {
    const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const data = await response.json();
    return data.data.userContestRanking;
  } catch (error) {
    console.error('Error fetching contest ranking:', error);
    return null;
  }
};

// Fetch user calendar/streak data
export const fetchUserCalendar = async (username) => {
  const query = `
    query userProfileCalendar($username: String!, $year: Int) {
      matchedUser(username: $username) {
        userCalendar(year: $year) {
          streak
          totalActiveDays
        }
      }
    }
  `;

  try {
    const currentYear = new Date().getFullYear();
    const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username, year: currentYear },
      }),
    });

    const data = await response.json();
    return data.data.matchedUser.userCalendar;
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    return null;
  }
};
