import useAuthStore from "@/context/auth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ onlyUnauthenticated = false }) => {
  const auth = useAuthStore((s) => s.auth);

  if (onlyUnauthenticated && auth) {
    return <Navigate to="/" replace />;
  }

  if (!onlyUnauthenticated && !auth) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
