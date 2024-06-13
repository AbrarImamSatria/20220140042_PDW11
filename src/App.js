import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animations/Animation - 1718280339869.json'; // Adjust the path if necessary
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottie animationData={animationData} loop={true} className="App-logo" />
        <p>
        Ketika pagi datang, Saya tidak malas, saya hanya buffering.
        </p>
        <a
          className="App-link"
          href="https://myklass-eng.umy.ac.id/my/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zzzzzzzzzzz
        </a>
      </header>
    </div>
  );
}

export default App;
