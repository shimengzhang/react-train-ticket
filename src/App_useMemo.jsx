import React, {
  Component, useState, useMemo, useCallback, memo,
} from 'react';

const Counter = memo((props) => {
  console.log('counter');
  return (
    <h1>
      {props.count}
    </h1>
  );
});

function App(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(100);

  const double = useMemo(() => count * 2, [count === 3]);
  const onClick = useCallback(() => { console.log('click'); }, []);
  // const onClick = useMemo(() => () => { console.log('click'); }, []);
  // const onClick = () => { console.log('click'); };
  return (
    <div>
      <button
        onClick={() => { setCount(count + 1); }}
      >
        press
      </button>
      <h2>double:{double}</h2>
      <Counter count={double} onClick={onClick}></Counter>
    </div>
  );
}

export default App;
