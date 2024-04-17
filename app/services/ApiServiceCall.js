import ApiService from '../services/ApiService';

// Add other API requests as needed...
export const fetchMoviesData = async searchString => {
  try {
    const response = await ApiService.get(`/?q=${searchString}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};
