import React from 'react';
import Home from './components/Home';
import './app.scss';

export default function App() {
  return (
    <div className='app'>
      <label className='switch'>
        <input type="checkbox" id='toggleButton' />
        <span className='slider round'></span>
      </label>
      <Home />
    </div>
      )
}
