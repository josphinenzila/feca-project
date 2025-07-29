import UserViewPage from "@/components/dashboard/sections/users/view";

// ----------------------------------------------------------------------

export default function UserPage(params: any) {
  return <UserViewPage id={params.id} />;
}
