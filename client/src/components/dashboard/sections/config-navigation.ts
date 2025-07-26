import { useCallback, useMemo } from "react";
import { paths } from "@/routes/paths";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/selectors/auth";
import { hasPermission } from "@/utils";

export function useNavData() {
  const { user } = useSelector(selectUser) || {};

  const checkPermission = useCallback(
    (user: any, permissions: any) => hasPermission(user, permissions),
    [user]
  );

  const data = useMemo(
    () => [
      {
        items: [
          checkPermission(user, ["manage.system"]) && {
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
    [user]
  );

  return data;
}
