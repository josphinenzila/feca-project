import axios, { AxiosResponse } from "axios";
import { storage } from "@/utils/storage";
import { app } from "@/config";
import api from "./api";

interface UserData {
  user: any;
  token: string;
  refreshToken: string;
}

const { BACKEND_URL } = app;

// Login user
const login = async (payload: any): Promise<UserData> => {
  const response: AxiosResponse<any> = await axios.post(
    `${BACKEND_URL}/auth/login`,
    payload
  );

  if (response.data) {
    const { user, token, refreshToken } = response.data.data;
    storage.set("user", JSON.stringify({ user, token, refreshToken }));
  }

  return response.data.data;
};

// Register user
const register = async (payload: any): Promise<any> => {
  const response: AxiosResponse<any> = await axios.post(
    `${BACKEND_URL}/auth/register`,
    payload
  );
  return response.data.data;
};

// Logout
const logout = (): void => {
  storage.purge("user");
  storage.purge("business");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
