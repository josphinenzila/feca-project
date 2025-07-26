import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services";
import { storage } from "@/utils/storage";

export const checkAuthStatus = createAsyncThunk(
  "auth/checkStatus",
  async (_, { rejectWithValue }) => {
    try {
      const storedUser = storage.get("user");
      if (storedUser) {
        return JSON.parse(storedUser);
      }
      return null;
    } catch (error) {
      return rejectWithValue("Failed to check auth status");
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      return await authService.login(payload);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      return await authService.register(payload);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors[0]);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    // Clear user data from local storage
    storage.purge("user");

    // Clear user data from Redux state
    dispatch(authSlice.actions.reset());
  }
);
