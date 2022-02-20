import axios from 'axios';
import errorAlert from './errorAlert';

axios.interceptors.response.use((response) => response.data, (error) => {
  const expectedError = error.response
    && error.response.status >= 400
    && error.response.status < 500;

  if (!expectedError) {
    errorAlert();
  }

  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
};
