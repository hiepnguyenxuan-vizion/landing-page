import axios from 'axios';
import { ENV } from 'consts/env';

export const createContactRequest = (data: Object) => {
  return axios.post(`${ENV.BASE_API_URL}/Contact`,data)
};