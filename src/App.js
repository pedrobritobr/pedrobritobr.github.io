import React from 'react';
// import reactLogo from './styles/images/toolsLogos';
import './App.css';
import Learned from './components/Learned';

// EDITAR FONT
// C:\Users\Pedro\Desktop\Poppins

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-title">
          Precisando de um desenvolvedor web/apps?
        </h1>
      </header>
      {Learned()}
      <footer>
        <h2>
          <a
            href="https://www.linkedin.com/in/pedrobritobr/"
            target="_blank"
            rel="noreferrer"
          >
            meu LinkedIn
          </a>
        </h2>
      </footer>
    </div>
  );
}

export default App;
