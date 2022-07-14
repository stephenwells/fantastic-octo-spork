import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  return <button onClick={incrementCount}>+ {count}</button>;
}
