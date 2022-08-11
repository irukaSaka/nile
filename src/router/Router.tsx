import { memo, FC } from "react"
import { Routes, Route } from "react-router-dom"
import { LoginUserProvider } from "../components/providers/LoginUserProvider"
import { HeaderLayout } from "../components/templates/HeaderLayout"
import { Login } from "../components/top/pages/Login"
import { Page404 } from "../components/top/pages/Page404"
import { AdminRoutes } from "./AdminRoutes"

export const Router: FC = memo(() => (
  <LoginUserProvider>
    <Routes>
      <Route path="/top/login" element={<Login />} />
      <Route path="/admin">
        {AdminRoutes.map((route) => (<Route key={route.path} path={route.path} element={<HeaderLayout>{route.children}</HeaderLayout>} />))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </LoginUserProvider>
))