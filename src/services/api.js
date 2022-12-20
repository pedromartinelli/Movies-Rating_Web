import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://moviesrating-api.onrender.com'
});