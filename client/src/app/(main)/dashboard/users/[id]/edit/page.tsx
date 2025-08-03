import EditUserPage from "@/components/dashboard/sections/users/edit";

// ----------------------------------------------------------------------

export default async function UserPageEdit({ params }: any) {
  const { id } = await params;
  return <EditUserPage id={id} />;
}
