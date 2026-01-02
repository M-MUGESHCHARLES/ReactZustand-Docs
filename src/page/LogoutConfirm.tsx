import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export default function LogoutConfirm() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleConfirm = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <p className="text-lg">Are you sure you want to logout?</p>

      <div className="flex gap-4">
        <button
          onClick={handleConfirm}
          className="rounded bg-red-500 px-6 py-2 text-white"
        >
          Yes
        </button>

        <button
          onClick={() => navigate("/")}
          className="rounded border px-6 py-2"
        >
          No
        </button>
      </div>
    </div>
  );
}
