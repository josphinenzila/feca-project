"use client";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors/auth";
import { useRouter } from "@/routes/hooks";

export default function PermissionGuard({ children, allowedPermissions }) {
  const { user } = useSelector(selectUser) || {}; // Ensure null for unauthenticated users
  const router = useRouter();

  // Check permissions after user data is available
  const hasPermission = allowedPermissions.some((permission) =>
    user?.rolePermissions?.includes(permission)
  );

  if (!hasPermission) {
    router.push("/dashboard/error");
    return null;
  }

  return <>{children}</>;
}

PermissionGuard.propTypes = {
  children: PropTypes.node,
  allowedPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
