import React, { useState } from "react";
function Hookcounter() {
  const [items, setItems] = useState(0);
  return (
    <div>
      <p>You clicked {items} times</p>
      <button onClick={() => setItems(items + 1)}>Click me</button>
    </div>
  );
}
export default Hookcounter;
