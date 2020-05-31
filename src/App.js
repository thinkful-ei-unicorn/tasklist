import React, { Component } from 'react';
import Tasklist from './Tasklist';
import './App.css';

class App extends Component {

  render(){
    return (
      <main className='App'>
        <div className='App-list'>
          <Tasklist />
        </div>      
      </main>
    );
  }
}

export default App;