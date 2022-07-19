import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://noah-ninostyle-typescript-api.herokuapp.com'
  // baseURL: 'http://localhost:4000'
});

export default instance;
