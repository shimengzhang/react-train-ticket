import React, { Component } from 'react';
import { BatteryContext } from '../context';

class Leaf extends Component {
  static contextType = BatteryContext

  render() {
    const battery = this.context;
    return (
      <h1>battery:{battery}</h1>
    );
  }
}

export default Leaf;
