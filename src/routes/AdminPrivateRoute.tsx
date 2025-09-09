import type { ReactNode } from "react";
import { useAppSelector } from "../redux/features/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const AdminPrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  console.log(user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  if (user && user?.role == "admin") {
    return children;
  } else {
    toast.error("Admin can access admin dashboard");
    return <Navigate to="/" />;
  }
};

export default AdminPrivateRoute;
