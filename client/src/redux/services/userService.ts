import { AxiosResponse } from "axios";
import { app } from "@/config";
import api from "./api";

const { BACKEND_URL } = app;

// Get User
const getUser = async (user: string): Promise<any> => {
  const response: AxiosResponse<any> = await api.get(
    `${BACKEND_URL}/users/${user}`
  );
  return response.data.data;
};

// Get Users
const getUsers = async (): Promise<any> => {
  const response: AxiosResponse<any> = await api.get(`${BACKEND_URL}/users`);
  return response.data.data;
};

// Create User
const createUser = async (payload: any): Promise<any> => {
  const response: AxiosResponse<any> = await api.post(
    `${BACKEND_URL}/users`,
    payload
  );

  return response.data.data;
};

// Update User
const updateUser = async (id: string, payload: any): Promise<any> => {
  const response: AxiosResponse<any> = await api.post(
    `${BACKEND_URL}/users/${id}`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data.data;
};

// Delete User
const deleteUser = async (user: number): Promise<any> => {
  const response: AxiosResponse<any> = await api.delete(
    `${BACKEND_URL}/users/${user}`
  );
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
