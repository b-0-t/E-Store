// @ts-nocheck

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

API.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default API;
