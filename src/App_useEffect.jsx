import React, { Component, useState, useEffect } from 'react';

// class App2 extends Component {
//   state={
//     count: 1,
//     size: {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight,
//     },
//   }

//   // 使用类属性的方式
//   onResize=() => {
//     this.setState({
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight,
//       },
//     });
//   }

//   componentDidMount() {
//     document.title = this.state.count;
//     window.addEventListener('resize', this.onResize, false);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize, false);
//   }

//   componentDidUpdate() {
//     document.title = this.state.count;
//   }

//   render() {
//     const { count, size } = this.state;
//     return (
//       <div>
//         <button
//           onClick={() => this.setState({
//             count: count + 1,
//           })}>
//           press
//         </button>
//         <div>count:{count} size:{size.width} {size.height}</div>
//       </div>
//     );
//   }
// }

function App(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  };

  useEffect(() => {
    document.title = count;
  });

  useEffect(() => {
    console.log('count', count);
  }, [count]);

  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  const onClick = () => {
    console.log('click');
  };

  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false);
    return () => {
      document.querySelector('#size').removeEventListener('click', onClick, false);
    };
  });

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}>
        press
      </button>
      <div>count:{count}</div>
      {
        count % 2
          ? <div id="size">size: {size.width} {size.height}</div>
          : <p id="size">size: {size.width} {size.height}</p>
      }

    </div>
  );
}

export default App;
