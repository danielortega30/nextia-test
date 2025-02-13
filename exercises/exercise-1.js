// ORIGINAL
// import { useState } from 'react';
// function Counter() {
// const [count, setCount] = useState(0);
// const [message, setMessage] = useState(`Count is: ${count}`);
// const increment = () => {
// setCount(count + 1);
// setMessage(`Count is: ${count + 1}`);
// };
// return (
// <div>
// <p>{message}</p>
// <button onClick={increment}>Increment</button>
// </div>

// RESPUESTA
// - Mantiene un estado message redundante que depende directamente de count
// - Causa re-renderizados innecesarios al actualizar dos estados

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
