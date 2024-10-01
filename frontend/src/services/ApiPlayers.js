import axios from 'axios';

export const fetchPlayers = async (query) => {
  try {
    const response = await axios.get(
      `https://api.balldontlie.io/v1/players?search=${query}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_NBA_API_KEY,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching player data:', error);
    throw error;
  }
};
