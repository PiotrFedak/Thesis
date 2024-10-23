import axios from 'axios';

export const fetchGames = async () => {
  try {
    const response = await axios.get('https://api.balldontlie.io/v1/games', {
      params: {
        seasons: [2024],
      },
      headers: {
        Authorization: process.env.REACT_APP_NBA_API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};
