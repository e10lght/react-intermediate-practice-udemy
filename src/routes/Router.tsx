import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { UserManagement } from "../components/pages/home/UserManagement";
import { Setting } from "../components/pages/home/Setting";
import { Home } from "../components/pages/home/Home";
import { Login } from "../components/pages/login/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "../routes/HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";


export const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/home" element={<HeaderLayout />} /> */}
            <Route path="/home" element={<HeaderLayout children={<Home />}/>} /> 
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/home/user_management" element={<UserManagement />} />
            <Route path="/home/setting" element={<Setting />} />
            <Route path="/home/*" element={<Page404 />} />
            <Route path="/*" element={<Page404 />} />

            {/* {homeRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.children}
                />
            ))} */}
        </Routes>
    )
}