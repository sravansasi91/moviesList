import ApiService from '../services/ApiService';
//https://search.imdbot.workers.dev/?q=a

const fetchMoviesData = async searchString => {
  try {
    const response = await ApiService.get(`/?q=${searchString}`);
    console.log('movieData-------', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};

export default fetchMoviesData;