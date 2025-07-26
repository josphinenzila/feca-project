import DashboardHome from "@/components/dashboard/sections/home";
import { PermissionGuard } from "@/auth/guard";

export default function DashboardPage() {
  return (
    <PermissionGuard allowedPermissions={["manage.system"]}>
      <DashboardHome />
    </PermissionGuard>
  );
}
