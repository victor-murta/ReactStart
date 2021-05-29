import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {
  render() { 
    return ( 
      <NavBar>
        <main className="container">
          <Counters/>
        </main>
      </NavBar>      
    );
  }
}
 
export default App;
