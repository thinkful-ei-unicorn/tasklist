import React, { Component } from 'react';
import Tasklist from './Tasklist';
import './App.css';

class App extends Component {

  render(){
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Task List</h1>
        </header>
        <div className='App-list'>
          <Tasklist />
        </div>      
      </main>
    );
  }
}

export default App;