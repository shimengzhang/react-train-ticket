import React, { Component, PureComponent, memo } from 'react';

class Foo extends PureComponent {
  render() {
    console.log('render foo');
    return <div>{this.props.person.age}</div>;
  }
}

// const Foo = memo((props) => {
//   console.log('render foo');
//   return <div>{props.person.age}</div>;
// });
export default Foo;
