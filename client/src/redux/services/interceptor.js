import axios from "axios";
import { storage } from "@/utils/storage";
import authService from "./authService";

import { app } from "@/config";
const { BACKEND_URL } = app;

const onRequest = (config) => {
  const { token } = JSON.parse(storage.get("user") || {});
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  if (error.response) {
    if (
      error.response.status === 401 ||
      (error.response.status === 403 &&
        error.response.data.errors[0].message === "Expired token")
    ) {
      const storedToken = JSON.parse(storage.get("user"));

      try {
        const res = await axios.post(`${BACKEND_URL}/auth/refresh`, {
          refreshToken: storedToken.refreshToken,
        });

        const { user, token, refreshToken } = res.data.data;

        storage.set("user", JSON.stringify({ user, token, refreshToken }));

        // retry the initial query
        // docs https://axios-http.com/docs/req_config

        const originalRequest = error.config;
        const { url, method, data } = originalRequest;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        if (method === "get") {
          return await axios.get(url, config);
        } else if (method === "post") {
          return await axios.post(url, data, config);
        } else if (method === "put") {
          return await axios.put(url, data, config);
        } else if (method === "delete") {
          return await axios.delete(url, config);
        }
      } catch (_error) {
        if (_error.response.status === 400) {
          if (typeof window !== "undefined") {
            window.location.href = "/login";
            return authService.logout();
          }
        }

        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
