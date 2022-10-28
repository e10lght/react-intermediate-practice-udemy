import { Home } from "../components/pages/home/Home";
import { Setting } from "../components/pages/home/Setting";
import { UserManagement } from "../components/pages/home/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/home",
    children: <Home />
  },
  {
    path: "/home/user_management",
    children: <UserManagement />
  },
  {
    path: "/home/setting",
    children: <Setting />
  },
  {
    path: "*",
    children: <Page404 />
  }
];