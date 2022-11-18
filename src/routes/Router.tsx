import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { UserManagement } from "../components/pages/home/UserManagement";
import { Setting } from "../components/pages/home/Setting";
import { Home } from "../components/pages/home/Home";
import { Login } from "../components/pages/login/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "../routes/HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";


export const Router: FC = () => {
    return (
        <Routes>

            <Route path="/" element={<Login />} />

            {homeRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<HeaderLayout children={route.children} />}
                />
            ))}
        </Routes>
    )
}