"use client";

import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors/auth";
import { useRouter } from "@/routes/hooks";
//import { SplashScreen } from "@/components/dashboard/common/loading-screen";

export default function AuthGuard({ children }) {
  const { user } = useSelector(selectUser) || {}; // Ensure null for unauthenticated users
  const router = useRouter();

  useEffect(() => {
    const checkUser = () => {
      if (user === null || user === undefined) {
        if (typeof window !== "undefined") {
          const searchParams = new URLSearchParams({
            returnTo: window.location.pathname,
          }).toString();
          const loginPath = `/login`;
          router.replace(`${loginPath}?${searchParams}`);
        }
      }
      // else if (user.verified === 0) {
      //   router.push("/verify");
      // }
    };

    checkUser();
  }, [user, router]);

  /*  if (user === null) {
    return <SplashScreen />;
  } */

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};
