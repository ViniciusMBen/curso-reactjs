import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app/App';
import Contato from './pages/contato';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } />           
        <Route path='/contato' element={ <Contato /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
