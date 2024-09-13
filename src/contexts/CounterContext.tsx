import { useState } from "react";
import { createContext } from "react";

//create new context object
export const counterContextObj = createContext();

function CounterContext({ children }) {
  let [counter, setCounter] = useState(1);

  return (
    <counterContext.Provider value={[counter, setCounter]}>
      {children}
    </counterContext.Provider>
  );
}

export default CounterContext;
