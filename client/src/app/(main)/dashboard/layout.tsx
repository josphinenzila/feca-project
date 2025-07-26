import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

import { AuthGuard } from "@/auth/guard";

export default function DashboardLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
