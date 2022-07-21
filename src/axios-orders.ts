import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://noah-ninostyle-typescript-api.herokuapp.com'
});

export default instance;
