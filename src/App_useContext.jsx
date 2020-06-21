import React, {
  Component, useState, createContext, useContext,
} from 'react';

const CountContext = createContext();
const SizeContext = createContext();

function Counter() {
  const count = useContext(CountContext);
  const size = useContext(SizeContext);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{size}</h1>
    </div>
  );
}

function App(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(100);
  return (
    <div>
      <button
        onClick={() => { setCount(count + 1); }}
      >
        press
      </button>
      {count}
      <CountContext.Provider value={count}>
        <SizeContext.Provider value={size}>
          <Counter></Counter>
        </SizeContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

export default App;
