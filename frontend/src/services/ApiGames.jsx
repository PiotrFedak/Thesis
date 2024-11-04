import axios from 'axios';

export const fetchGames = async (cursor = null, teamId = null) => {
  try {
    const response = await axios.get('https://api.balldontlie.io/v1/games', {
      params: {
        seasons: [2024],
        per_page: 10,
        cursor: cursor,
        ...(teamId && { 'team_ids[]': teamId }),
      },
      headers: {
        Authorization: process.env.REACT_APP_NBA_API_KEY,
      },
    });
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};
