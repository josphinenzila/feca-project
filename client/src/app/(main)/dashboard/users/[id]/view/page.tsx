import { use } from "react";
import UserViewPage from "@/components/dashboard/sections/users/view";

// ----------------------------------------------------------------------

interface UserPageViewProps {
  params: Promise<{ id: string }>;
}

export default function UserPageView({ params }: UserPageViewProps) {
  const { id } = use(params);
  return <UserViewPage id={id} />;
}
