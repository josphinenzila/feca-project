import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../services";

// Get User
export const getUser = createAsyncThunk(
  "user/getUser",
  async (user, { rejectWithValue }) => {
    try {
      return await userService.getUser(user);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Get Users
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      return await userService.getUsers();
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Create users
export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      return await userService.createUser(payload);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      return await userService.updateUser(id, payload);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (user, { rejectWithValue }) => {
    try {
      return await userService.deleteUser(user);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Bulk Delete User
export const bulkDelete = createAsyncThunk(
  "user/bulkDelete",
  async (payload, { rejectWithValue }) => {
    try {
      return await userService.bulkDelete(payload);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
