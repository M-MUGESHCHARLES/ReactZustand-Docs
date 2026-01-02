import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export default function Welcome() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Welcome, {user?.name}</h1>

      <button
        onClick={() => navigate("/logout")}
        className="rounded bg-red-500 px-6 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
}
