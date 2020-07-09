import React from 'react';
import logo from '../svg/logo.svg';
import '../css/App.css';
import MyReactComponent from '../compontents/demo'
import DemoInput from '../compontents/demoInput'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyReactComponent name='su'></MyReactComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DemoInput />
      </header>
    </div>
  );
}

export default App;
