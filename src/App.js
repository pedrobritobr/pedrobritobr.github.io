import React from 'react';
import reactLogo from './styles/images/toolsLogos';
import './App.css';

// EDITAR FONT
// C:\Users\Pedro\Desktop\Poppins

// EDITAR FAVICON
// https://duckduckgo.com/?t=ffab&q=favicon+html&ia=web
// https://kenzie.com.br/blog/favicon/
// https://www.digitalocean.com/community/tutorials/how-to-add-a-favicon-to-your-website-with-html

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-title">
          Precisando de um desenvolvedor web/apps?
        </h1>
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h2>
          <a
            href="https://www.linkedin.com/in/pedrobritobr/"
            target="_blank"
            rel="noreferrer"
          >
            meu LinkedIn
          </a>
        </h2>
      </header>
    </div>
  );
}

export default App;
