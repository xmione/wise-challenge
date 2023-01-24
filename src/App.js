import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplaySubGraphs from './apollo/queries'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplaySubGraphs/>
      </header>
    </div>
  );
}

export default App;
