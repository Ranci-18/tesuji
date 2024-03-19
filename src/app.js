import React, { useEffect } from 'react';
import Home from './components/Home';
import './app.scss';

export default function App() {
  useEffect(() => {
    function toggleTheme () {
      const body = document.querySelector('body');
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      body.setAttribute('data-theme', newTheme);
  }
    const toggleBtn = document.querySelector('#toggleButton');
    toggleBtn.addEventListener('click', toggleTheme);
    
    return () => {
      toggleBtn.removeEventListener('click', toggleTheme);
    };
  }, [])
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
