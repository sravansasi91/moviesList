import axios from 'axios';

const BASE_URL = 'https://search.imdbot.workers.dev';

const ApiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Adjust timeout as per your requirements
});

// export const fetchMoviesData = async searchString => {
//   try {
//     const response = await ApiService.get(`/q=${searchString}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movie data:', error);
//     throw error;
//   }
// };

// Add other API requests as needed...

export default ApiService;
