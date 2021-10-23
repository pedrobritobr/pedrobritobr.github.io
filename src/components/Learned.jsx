import React from 'react';
import {
  HTML5, CSS3, JAVASCRIPT, REACT, REDUX, PYTHON,
} from '../images';
import '../styles/components/learned.css';

export default function Learned() {
  return (
    <div className="learned">
      <h3>Tecnologias aprendidas</h3>
      <div className="techs-learned">
        <img src={HTML5} alt="HTML5" />
        <img src={CSS3} alt="CSS3" />
        <img src={JAVASCRIPT} alt="JAVASCRIPT" />
        <img src={REACT} alt="REACT" />
        <img src={REDUX} alt="REDUX" />
        <img src={PYTHON} alt="PYTHON" />
      </div>
    </div>
  );
}
