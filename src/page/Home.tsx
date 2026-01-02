import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Hello visitor</h1>
      <h4 className="text-medium font-semibold">Please login to continue,</h4>

      <button
        onClick={() => navigate("/login")}
        className="rounded bg-black px-6 py-2 text-white"
      >
        Login
      </button>
    </div>
  );
}
