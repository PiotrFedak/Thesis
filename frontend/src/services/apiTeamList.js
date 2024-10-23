import axios from 'axios';

export const fetchTeams = async () => {
  try {
    const response = await axios.get('https://api.balldontlie.io/v1/teams', {
      headers: {
        Authorization: process.env.REACT_APP_NBA_API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching teams data:', error);
    throw error;
  }
};
