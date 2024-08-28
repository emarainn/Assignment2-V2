import React, { Component } from 'react';

class Medal extends Component {
  state = {  }
  render() { 
    const { medal, country, onIncrement, onDecrement } = this.props;
    return (
      <div className="medals">
        { medal.name } Medals: { country[medal.name] }
        <button onClick={ () => onIncrement(country.id, medal.name) } style={{ marginLeft: '10px', width: '25px'}}>+</button>
        <button disabled={ country[medal.name] === 0 } onClick={ () => onDecrement(country.id, medal.name) } style={{ marginLeft: '10px', width: '25px'}}>-</button>
      </div>
    );
  }
}

export default Medal;