import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://noah-ninostyle-typescript-api.herokuapp.com'
});

export default instance;
