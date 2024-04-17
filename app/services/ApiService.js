import axios from 'axios';

const BASE_URL = 'https://search.imdbot.workers.dev';

const ApiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Adjust timeout as per your requirements
});

export default ApiService;
