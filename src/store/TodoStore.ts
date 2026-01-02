import { create } from "zustand";
import type { Actions, State } from "../types/Todo.type";
import { immer } from "zustand/middleware/immer";

export const useTodoStore = create<State & Actions>()(
  immer((set) => ({
    todos: {
      "1": {
        id: "1",
        title: "Learn Html",
        done: false,
      },
      "2": {
        id: "2",
        title: "Learn Css",
        done: false,
      },
      "3": {
        id: "3",
        title: "Learn Js",
        done: false,
      },
      "4": {
        id: "4",
        title: "Learn React",
        done: false,
      },
    },
    toggleTodo: (todoId: string) =>
      set((state) => {
        state.todos[todoId].done = !state.todos[todoId].done;
      }),
  }))
);
