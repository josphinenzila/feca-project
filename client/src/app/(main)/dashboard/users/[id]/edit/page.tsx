import EditUserPage from "@/components/dashboard/sections/users/edit";

// ----------------------------------------------------------------------

interface UserPageEditProps {
  params: Promise<{ id: string }>;
}

export default async function UserPageEdit({ params }: UserPageEditProps) {
  const { id } = await params;
  return <EditUserPage id={id} />;
}
