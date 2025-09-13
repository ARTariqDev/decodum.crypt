import './App.css';
import { useState, useEffect } from 'react';
import cryptImg from './assets/crypt.jpeg'; 

function App() {
  const [counter, setCounter] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 256);
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const generateMatrixDots = () => {
    const dots = [];
    for(let row = 0; row < 50; row++) {
      for(let col = 0; col < 50; col++) {
        if(Math.random() > 0.85) {
          dots.push(
            <div 
              key={`${row}-${col}`}
              className="matrix-dot"
              style={{
                left: `${col * 2}%`,
                top: `${row * 2}%`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          );
        }
      }
    }
    return dots;
  };

  const symbols = ['#', '%', '@', '∑'];

  return (
    <div className="film-grain-wrapper">
      <div className="matrix-background">
        {generateMatrixDots()}
      </div>
      <div className="pattern-overlay" />
      <div className="scanlines"></div>

      <h1 className="cryptic-title">Decodum ∘ JT Innoventions'25</h1>

      <div 
        className="cryptic-box" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '2px solid #ff8ad' }}
      >
        <h1 className="glitch" data-text="I miss you a lot...">I miss you a lot...</h1>
        <br />
        Hash: d077f244def8a70e5ea758bd8352fcd8<span className={`blinking-cursor ${cursorVisible ? 'visible' : 'hidden'}`}>_</span>
        <div className="sys-counter">
          SYS:{counter.toString(16).toUpperCase().padStart(2, '0') + ":: Hope you're excited for Decodum!!"}
        </div>
      </div>

      <div className="symbols">
        {symbols.map((symbol, index) => (
          <span 
            key={index} 
            style={{ 
              top: `${20 + index * 15}%`, 
              left: `${10 + index * 20}%`,
              animationDelay: `${index * 2}s`
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      <div className="corner-watermark text-[#fff8de]">
        [ SYS-LOCK v1.3 :: 1989 DECODER ACTIVE :: By  
        <a 
          href="https://github.com/ARTariqDev" 
          className="no-underline text-[#fff8de]"
        >
          Abdur Rehman Tariq
        </a> 
        & the Decodum Team]
      </div>
    </div>
  );
}

export default App;
