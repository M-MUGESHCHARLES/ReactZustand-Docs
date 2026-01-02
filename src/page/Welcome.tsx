import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";
import { useTodoStore } from "../store/TodoStore";

export default function Welcome() {
  const user = useAuthStore((state) => state.user);
   const { todos, toggleTodo } = useTodoStore();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-center gap-4">
        <h1 className="text-xl font-semibold">Welcome, {user?.name}</h1>

        <button
          onClick={() => navigate("/logout")}
          className="rounded bg-red-500 px-6 py-2 text-white"
        >
          Logout
        </button>
      </div>

      <div className="mt-8">
        <ul>
          {Object.values(todos).map((todo) => (
            <li
              key={todo.id}
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              <input title='input' type="checkbox" checked={todo.done} readOnly/>
              {todo.done ? <s>{todo.title}</s> : todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
