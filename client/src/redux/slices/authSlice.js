import { createSlice } from "@reduxjs/toolkit";
import { storage } from "@/utils/storage";
import {
  login,
  register,
  logout,
  checkAuthStatus,
} from "@/redux/actions/authActions";

const initialState = {
  user: null, // Initialize user to null initially
  error: null,
  success: false,
  loading: false,
  userInfo: null,
  authChecked: false,
  password: false,
  updated: false,
  deleted: false,
};

// Check if window is defined (client-side environment)
if (typeof window !== "undefined") {
  // If window is defined, update the user field from localStorage
  const storedUser = JSON.parse(storage.get("user"));
  if (storedUser) {
    initialState.user = storedUser;
  }
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      //checkAuthStatus
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.authChecked = true;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.authChecked = true;
      })
      //login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })
      //register
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.success = false;
        state.user = null; // Clear user state on logout
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, reset } = authSlice.actions;
export default authSlice.reducer;
