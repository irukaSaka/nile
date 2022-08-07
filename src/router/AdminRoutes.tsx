import { Home } from "../components/admin/pages/Home";
import { Setting } from "../components/admin/pages/Setting";
import { UserManagement } from "../components/admin/pages/UserManagement";
import { Page404 } from "../components/top/pages/Page404";

export const AdminRoutes = [
    {
        path: "",
        children: <Home />
    },
    {
        path: "user_management",
        children: <UserManagement />
    },
    {
        path: "setting",
        children: <Setting />
    },
    {
        path: "*",
        children: <Page404 />
    }
]