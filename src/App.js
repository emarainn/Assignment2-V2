import React, { Component } from 'react';
import Country from './components/Country';
import './App.css';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 2 },
    ],
    medals: [
      { id: 1, name: 'gold' },
      { id: 2, name: 'silver' },
      { id: 3, name: 'bronze' },
    ]
  }
  handleIncrement = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] += 1;
    this.setState({ countries: countries });
  }
  handleDecrement = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] -= 1;
    this.setState({ countries: countries });
  }
  getAllMedalsTotal() {
    let sum = 0;
    this.state.medals.forEach(medal => { sum += this.state.countries.reduce((a, b) => a + b[medal.name], 0); });
    return sum;
  }
  render() { 
    return (
      <React.Fragment>
          <div className='appHeading' style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontSize: '2rem'}}><b>Olympic Medals : </b></p>
          <span className='badge' style={{ fontSize: '2rem', marginTop: '2pc', paddingLeft: '8px'}}>
            <b>{ this.getAllMedalsTotal() }</b>
          </span>

        </div>
        <hr style={{ marginTop: '-25px'}} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='countries'>
            { this.state.countries.map(country => 
              <Country 
                key={ country.id } 
                country={ country } 
                medals={ this.state.medals }
                onIncrement={ this.handleIncrement } 
                onDecrement={ this.handleDecrement } />
            )}
        </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
 
export default App;