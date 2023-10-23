import React, { useState } from 'react'; // Import necessary components and hooks
import './calc.css'; // Import CSS styles
import Navbar from './components/Navbar'; // Import Navbar component
import Buttons from './components/Button'; // Import Buttons component
import Result from './components/Result'; // Import Result component

function App() {
  const [result, setResult] = useState('0'); // Use destructuring for useState

  const handleButtonClick = (value) => {
    // Define a single click handler for all buttons
    switch (value) {
      case '=':
        setResult((prevResult) => eval(prevResult).toString()); // Use functional state updates
        break;
      case 'c':
        setResult('0');
        break;
      case '+/-':
        setResult((prevResult) => (parseFloat(prevResult) * -1).toString());
        break;
      case '%':
        setResult((prevResult) => (parseFloat(prevResult) / 100).toString());
        break;
      default:
        setResult((prevResult) => (prevResult === '0' ? value : prevResult + value));
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="myCalculator">
        <Result result={result} />
        <Buttons Buttonclicked={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
