import './App.css';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1> 
        Estudos de React
      </h1>
        <br/>
      <h2>
        Estudando JSX
      </h2>

      <ul>
        <li>
          <Link to='/contato'> Ir para contato </Link>
        </li>
      </ul>
    </div>
  );
}


