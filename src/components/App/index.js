import React, { useState } from "react";
import "theme/index.scss";

function App() {
  const [calc, setCalc] = useState(0);
  return (
    <div>
      <div>{calc}</div>
      <button onClick={() => setCalc(prevCalc => prevCalc + 1)}>+</button>
    </div>
  );
}

export default App;
