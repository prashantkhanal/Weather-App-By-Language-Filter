import axios from 'axios';
import api from '../baseUrl';

export default axios.create({
  baseURL: api,
  params: {},
});
