import { Outlet, useRoutes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "../utils/RootAuth";

// Main Layout
import Layout from "../components/layout/Layout";

// Protected Routes
import Home from "../modules/home";

// Public Routes
import Login from "../modules/auth/login/Login";
import NotFound from "../modules/notFound/NotFound";
import Register from "../modules/auth/register/Register";
export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
