# Zustand

## Overview

`Zustand` is a small state management library for React

Used to manage global state (state shared across components)

Much simpler than Redux

No providers, no reducers, no boilerplate

### When do we need Zustand?

When props drilling becomes messy

When multiple components need the same data

Example use cases:

- Login status

- Cart items

- Theme (dark/light)

- User profile

### Key Concepts in Zustand

Store → place where state lives

State → data (count, user, cart, etc.)

Actions → functions that update state

Hooks → components read/update state using hooks

1. Installing Zustand

```
    npm install zustand
```

1. Store

```
    import { create } from "zustand";

    export const useXStore = create()(
        x: null,
        setX: (value) => set(x: value),
    );

```

1. Actions (two ways)
      1. Destructure the variable
      2. Or using object destructuring

  ```
    // Destructure the variable 
    const x = useXStore((state) => state.x);
  ```

  ```
    // object destructuring
    const { x } = useXStore();
  ```

## Middlewares

1. `immer` – Mutate State Safely

    When to use :
    - Complex nested state
    - Arrays / objects updates

    Example :

    ```
      import { immer } from "zustand/middleware/immer";

      export const useTodoStore = create(
        immer((set) => ({
          todos: [],
          addTodo: (text) =>
            set((state) => {
              state.todos.push({ text, done: false });
            }),
        }))
      );
    ```

2. `persist` – Save State (localStorage / sessionStorage)

    When to use :
    - Auth
    - Theme
    - User preferences
    - Cart data

    Example :

    ```
      import { create } from "zustand";
      import { persist } from "zustand/middleware";

      export const useAuthStore = create(
        persist(
          (set) => ({
            user: null,
            isLoggedIn: false,

            login: (user) => set({ user, isLoggedIn: true }),
            logout: () => set({ user: null, isLoggedIn: false }),
          }),
          {
            name: "auth-storage",
          }
        )
      );
    ```

