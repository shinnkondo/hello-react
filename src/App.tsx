import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import HelloWorld from './HelloWorld';
import PopUpForm from './PopUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld numEx={9}></HelloWorld>
      <PopUpForm numEx={9}></PopUpForm>
    </div>
  );
}

export default App;
