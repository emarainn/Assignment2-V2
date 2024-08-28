import React, { Component } from 'react';
import Medal from './Medal';

class Country extends Component {
  getMedalsTotal(country, medals) {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }
  render() { 
    const { country, medals, onIncrement, onDecrement } = this.props;
    return (
      
      <div className="country" style={{ marginBottom: '20px'}}>
        <div className="name" style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', paddingBottom: '5px'}}>
          <b>{ country.name } :
          <span className="badge" style={{ paddingLeft: '6px'}}>
            { this.getMedalsTotal(country, medals) }
          </span>
          </b>
        </div>
        { medals.map(medal =>
          <Medal 
            key={ medal.id } 
            country={ country } 
            medal={ medal } 
            onIncrement={ onIncrement } 
            onDecrement={ onDecrement } />
        ) }
      </div>
      
    );
  }
}

export default Country;
