import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/" : "/",
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
