// Utility function to check for permissions
export const hasPermission = (user, requiredPermissions) => {
  return requiredPermissions?.some((permission) =>
    user?.rolePermissions?.includes(permission)
  );
};
