import {errorToast} from './../core';
import {constants} from '../core';
import axios from 'axios';
import {getStore} from '../store';

// Create Instance
const AxiosInstance = axios.create({
  baseURL: constants.baseUrl,
  timeout: 20000,
  transformRequest: [
    function (data, headers) {
      let {profileData} = getStore().auth;
      if (profileData && profileData?.accessToken) {
        headers['Authorization'] = `Bearer ${profileData?.accessToken}`;
      }
      if (data && data._parts) {
        return data;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
  headers: {'Content-Type': 'application/json'},
});

// Response Interceptor
AxiosInstance.interceptors.response.use(
  response => {
    console.log('API RESPONSE', response);
    if (response?.data?.error_code === 5004) {
      console.log('inside un-auth');
      errorToast(response.data.data?.message);
      return response;
    } else {
      return response;
    }
  },
  error => {
    console.log('ERROR', JSON.stringify(error));
    console.log('ERROR CONFIG', error.config);
    if (!error.response) {
      return Promise.reject({
        status: constants.apiFailure,
        message: 'Please check your internet connection',
      });
    } else {
      return error.response;
    }
  },
);

export default AxiosInstance;
