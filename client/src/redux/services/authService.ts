import axios, { AxiosResponse } from "axios";
import { storage } from "@/utils/storage";
import { app } from "@/config";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  // Add other user properties as needed
}

interface UserData {
  user: User;
  token: string;
  refreshToken: string;
}

interface LoginPayload {
  email: string;
  password: string;
  client: string; // "web" from the login form
}

interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  roleId: number; // Set to 3 in the register form
}

interface ApiResponse<T> {
  data: T;
  message?: string;
}

const { BACKEND_URL } = app;

// Login user
const login = async (payload: LoginPayload): Promise<UserData> => {
  const response: AxiosResponse<ApiResponse<UserData>> = await axios.post(
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
const register = async (payload: RegisterPayload): Promise<UserData> => {
  const response: AxiosResponse<ApiResponse<UserData>> = await axios.post(
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
