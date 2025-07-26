import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  bulkDelete,
} from "@/redux/actions/userActions";

const initialState = {
  success: false,
  error: null,
  created: false,
  updated: false,
  deleted: false,
  loading: false,
  userData: null,
  userInfo: null,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => ({
      ...initialState,
      users: state.users,
    }),
    resetSuccess: (state) => {
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder
      //get user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userData = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get users
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //create user
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.created = true;
        state.success = true;
        state.userData = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.updated = true;
        state.userData = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //delete user
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.deleted = true;
        state.userData = action.meta.arg;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(bulkDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(bulkDelete.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
        state.success = true; // Optionally set a success flag
      })
      .addCase(bulkDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, resetSuccess } = userSlice.actions;
export default userSlice.reducer;
