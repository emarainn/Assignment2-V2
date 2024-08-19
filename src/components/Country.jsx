import React, { Component } from 'react';

// Country is a child of the parent component App
class Country extends Component {
    state = {
        name: 'United States',
        gold: 0,
      }

      handleClick = () => {
        this.setState({ gold: this.state.gold + 1 })
        
    }

  render() { 
    return (
        <div style={{marginTop: '5pc', paddingLeft: '0'}}>
            <div style={{ fontSize:'2em' }}>
                { this.state.name }
            </div>
            <div id="block_container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div id="bloc1"><p>Gold Medals: { this.state.gold }</p></div>
                <div id="bloc2" style={{ paddingTop: '15px', paddingLeft: '15px'}}>
                    <button onClick={ this.handleClick } type="button">+</button>
                </div>
            </div>
        </div>
      );
  }
}

export default Country