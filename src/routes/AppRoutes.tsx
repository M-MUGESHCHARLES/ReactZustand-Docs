import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../page/Login";
import Home from "../page/Home";
import LogoutConfirm from "../page/LogoutConfirm";
import ProtectedRoute from "./ProtectedRoute";
import Welcome from "../page/Welcome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/welcome"
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      />

      <Route
        path="/logout"
        element={
          <ProtectedRoute>
            <LogoutConfirm />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
