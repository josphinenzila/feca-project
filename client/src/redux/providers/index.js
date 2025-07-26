"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { useDispatch } from "react-redux";
import { checkAuthStatus } from "@/redux/actions/authActions";
import { useEffect } from "react";

function AuthWrapper({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return <>{children}</>;
}

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <AuthWrapper>{children}</AuthWrapper>
    </Provider>
  );
}
