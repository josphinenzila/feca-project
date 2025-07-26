import { createSelector } from "reselect";

const selectAuthState = (state) => state.auth;

export const selectUser = createSelector(selectAuthState, (auth) =>
  auth.user ? auth.user : {}
);

export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthChecked = (state) => state.auth.authChecked;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthSuccess = (state) => state.auth.success;
