import Users from "@/components/dashboard/sections/users";
import { PermissionGuard } from "@/auth/guard";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Dashboard: Users List",
};

export default function UsersPage() {
  return (
    <PermissionGuard allowedPermissions={["manage.system"]}>
      <Users />
    </PermissionGuard>
  );
}
