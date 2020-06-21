import React, {
  Component, useState, useRef, useCallback, useEffect,
} from 'react';

// 返回的是 jsx
function useCounter(count) {
  const size = useSize();
  return (
    <div>
      Counter:{count}
      <br/>
      size:{size.width} {size.height}
    </div>
  );
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize, false);

    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  return size;
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef();

  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count1) => count1 + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  });

  return [count, setCount];
}

function App(props) {
  const [count, setCount] = useCount(0);
  const Counter = useCounter(count);
  const size = useSize();
  return (
    <div>
      <button
        onClick={() => { setCount(count + 1); }}
      >
        press
      </button>
      <br/>
        -- count:{count} --
        size:{size.width} {size.height}
        {Counter}
    </div>
  );
}

export default App;
