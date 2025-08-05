import { useCallback, useMemo } from "react";
import { paths } from "@/routes/paths";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors/auth";
import { hasPermission } from "@/utils";

// Define proper types
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  permissions?: string[];
  role?: {
    permissions?: string[];
  };
}

type Permission = string | string[];

export function useNavData() {
  const { user } = useSelector(selectUser) || {};

  const checkPermission = useCallback(
    (user: User | null | undefined, permissions: Permission) =>
      hasPermission(user, permissions),
    [] // Remove unnecessary 'user' dependency
  );

  const data = useMemo(
    () => [
      {
        items: [
          {
            title: "dashboard",
            path: paths.dashboard.root,
            //icon: ICONS.analytics,
          },
          ,
          // Conditionally render the "Users" section only if the user has the required permission
          /* checkPermission(user, ["manage.system", "manage.user"]) && {
            title: "Programs",
            path: paths.dashboard.programs.root,
            //icon: ICONS.lock,
            children: [
              { title: "list", path: paths.dashboard.programs.list },
              { title: "create", path: paths.dashboard.programs.create },
            ],
          }, */

          checkPermission(user, ["manage.system"]) && {
            title: "Users",
            path: paths.dashboard.users.root,
            //icon: ICONS.user,
            children: [
              { title: "list", path: paths.dashboard.users.list },
              { title: "create", path: paths.dashboard.users.create },
            ],
          },
        ].filter(Boolean), // Filter out null or false items from the list
      },
    ],
    [user, checkPermission] // Add missing checkPermission dependency
  );

  return data;
}
