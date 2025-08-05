import { AxiosResponse } from "axios";
import { app } from "@/config";
import api from "./api";

const { BACKEND_URL } = app;

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  createdAt?: string;
  updatedAt?: string;
}

interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  roleId: number;
}

interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  roleId?: number;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
}

// Get User
const getUser = async (userId: string): Promise<User> => {
  console.log(userId);
  const response: AxiosResponse<ApiResponse<User>> = await api.get(
    `${BACKEND_URL}/users/${userId}`
  );
  return response.data.data;
};

// Get Users
const getUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<ApiResponse<User[]>> = await api.get(
    `${BACKEND_URL}/users`
  );
  return response.data.data;
};

// Create User
const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const response: AxiosResponse<ApiResponse<User>> = await api.post(
    `${BACKEND_URL}/users`,
    payload
  );

  return response.data.data;
};

// Update User
const updateUser = async (
  id: string,
  payload: UpdateUserPayload
): Promise<User> => {
  const response: AxiosResponse<ApiResponse<User>> = await api.put(
    `${BACKEND_URL}/users/${id}`,
    payload
  );
  return response.data.data;
};

// Delete User
const deleteUser = async (userId: string): Promise<{ message: string }> => {
  const response: AxiosResponse<ApiResponse<{ message: string }>> =
    await api.delete(`${BACKEND_URL}/users/${userId}`);
  return response.data.data;
};

const userService = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;
