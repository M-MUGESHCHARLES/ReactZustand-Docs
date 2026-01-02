export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export type State = {
  todos: Record<string, Todo>;
};

export type Actions = {
  toggleTodo: (todoId: string) => void;
};
