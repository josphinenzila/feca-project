// ----------------------------------------------------------------------

const ROUTES = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

// ----------------------------------------------------------------------

export const paths = {
  dashboard: {
    root: ROUTES.DASHBOARD,

    dashboard: {
      root: `${ROUTES.DASHBOARD}`,
    },
    programs: {
      root: `${ROUTES.DASHBOARD}/programs/list`,
      create: `${ROUTES.DASHBOARD}/programs/create`,
      list: `${ROUTES.DASHBOARD}/programs/list`,
      edit: (id) => `${ROUTES.DASHBOARD}/programs/${id}/edit`,
    },
    users: {
      root: `${ROUTES.DASHBOARD}/users/list`,
      create: `${ROUTES.DASHBOARD}/users/create`,
      list: `${ROUTES.DASHBOARD}/users/list`,
      profile: `${ROUTES.DASHBOARD}/users/profile`,
      account: `${ROUTES.DASHBOARD}/users/account`,
      edit: (id) => `${ROUTES.DASHBOARD}/users/${id}/edit`,
      view: (id) => `${ROUTES.DASHBOARD}/users/${id}/view`,
    },
  },
};
