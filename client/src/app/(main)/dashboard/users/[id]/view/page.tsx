import UserViewPage from "@/components/dashboard/sections/users/view";

// ----------------------------------------------------------------------

export default function UserPageView(params: any) {
  return <UserViewPage id={params.id} />;
}
