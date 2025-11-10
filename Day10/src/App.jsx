import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [ mode, setMode ] = useState('light');

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`${mode === 'light' ? 'bg-white text-black' : 'bg-blue text-white'}`}>
        <div>Count: {count}</div>
        <h1>{mode}</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button> 
        <button onClick={resetCount}>Reset Count</button>
        <button onClick={toggleMode}>
          Toggle Mode
        </button>
    </div>
  )
}

export default App
