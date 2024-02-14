import { Steps } from 'nextra/components';

# Handling Side Effects

Side effects in React refer to operations that occur outside the normal component rendering process, such as data fetching, subscriptions, or manual DOM manipulations.
In this article, we'll explore various approaches for handling side effects in React components.

<Steps>

### `useEffect` Hook

The `useEffect` hook is a powerful tool for managing side effects in functional components. It takes two parameters: a function containing the side effect logic and an optional dependency array.

```jsx
import { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Side effect logic here
    console.log('Component mounted');

    return () => {
      // Cleanup logic on component unmount
      console.log('Component unmounted');
    };
  }, []); // Dependency array, empty for componentDidMount equivalent

  return (
    // Component JSX
  );
}
```

### Conditional Side Effects

You can conditionally execute side effects based on certain conditions within the `useEffect` block.

```jsx
useEffect(() => {
  if (condition) {
    // Side effect logic based on condition
  }
}, [dependency]);
```

### Fetching Data:

Use `useEffect` to fetch data from an API and update the component state.

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [dependency]);
```

### Subscriptions:

Manage subscriptions with `useEffect` to subscribe and unsubscribe when the component mounts and unmounts.

```jsx
useEffect(() => {
  const subscription = externalService.subscribe();
  // Cleanup subscription on component unmount
  return () => {
    subscription.unsubscribe();
  };
}, [dependency]);
```

### Document Title Update:

Change the document title as a side effect using `useEffect`.

```jsx
useEffect(() => {
  document.title = "New Page Title";
}, [dependency]);
```

By using the `useEffect` hook and other React features, you can effectively manage side effects in your components, ensuring a clean and efficient development process. This approach aligns with React's declarative nature, allowing you to focus on the component's behavior without worrying about imperative side effect handling.
