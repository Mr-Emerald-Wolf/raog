import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Converter from './components/Converter';

function App() {
  return (
    <>
        <div class = "background-anime backdrop-blur-3xl lighten"
        style={{ 
          backgroundSize: `cover`, height: `100vh`,backgroundSize: `600%`, backdropFilter: `blur(60%)`
    }}>
    <Navbar/>
    <Converter/>
        </div>
    </>
  );
}

export default App;
