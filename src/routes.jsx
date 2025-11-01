import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "./layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute } from "./components/protected";

const routes = createBrowserRouter([
  {
    element: <ProtectedRoute onlyUnauthenticated />,
    children: [
      {
        path: "/signin",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/signin" replace />,
  },
]);

export default routes;
