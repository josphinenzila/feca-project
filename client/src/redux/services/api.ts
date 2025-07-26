import axios, { AxiosInstance } from "axios";
import axiosRetry from "axios-retry";
import { setupInterceptorsTo } from "./interceptor";
import { app } from "@/config";

const createApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: app.BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosRetry(api, { retries: 3 });
  return api;
};

const api: AxiosInstance = setupInterceptorsTo(createApiInstance());

export default api;
