## Zustand

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

2. Store

```
    import { create } from "zustand";

    export const useXStore = create()(
        x: null,
        setX: (value) => set(x: value),
    );

```

3. Actions (two ways)

      1. Destructure the variable 

  ```
    function from the store
    const x = useXStore((state) => state.x);
  ```

     2.  Or using object destructuring

  ```
    const { x } = useXStore();
  ```
