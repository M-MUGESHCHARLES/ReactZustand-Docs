import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export default function ProtectedRoute({children,}: {children: React.ReactNode}) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
