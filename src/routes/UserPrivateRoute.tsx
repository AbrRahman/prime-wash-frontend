import type { ReactNode } from "react";
import { useAppSelector } from "../redux/features/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const UserPrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  if (user) {
    return children;
  } else {
    toast.error("User can access this pase");
    return <Navigate to="/" />;
  }
};

export default UserPrivateRoute;
