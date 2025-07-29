"use client";

import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors/auth";
import { useRouter } from "@/routes/hooks";

export default function PermissionGuard({ children, allowedPermissions }) {
  const { user } = useSelector(selectUser) || {};
  const router = useRouter();

  // Check permissions after user data is available
  const hasPermission = allowedPermissions.some((permission) =>
    user?.rolePermissions?.includes(permission)
  );

  useEffect(() => {
    if (user && !hasPermission) {
      router.push("/dashboard/error");
    }
  }, [hasPermission, router, user]);

  // Don't render if user exists but has no permission
  if (user && !hasPermission) {
    return null;
  }

  // Show loading if user data is still loading
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}

PermissionGuard.propTypes = {
  children: PropTypes.node,
  allowedPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
