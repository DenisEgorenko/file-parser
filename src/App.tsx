import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from '../src/components/MainPage';



function App() {
  return (
    <div className="App">
        <div className='version'>
            v0.4 (С вводом времени)
        </div>
        <MainPage/>
    </div>
  );
}

export default App;
