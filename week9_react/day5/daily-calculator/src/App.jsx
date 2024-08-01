import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    if(operator === '+') setResult(num1 + num2);
    if(operator === '-') setResult(num1 - num2);
    if(operator === '*') setResult(num1 * num2);
    if(operator === '/') {
      setResult(num1 / num2);
      if(num2 === 0) setResult("You can't divide by 0");
    }
  };

  return (
    <div className="App">
      <h2>Adding Two Numbers</h2>
      <input className='inputs' type="number" value={ num1 } name='num1' onChange={ (event) => setNum1(Number(event.target.value)) } />
      <input className='inputs' type="number" value={ num2 } name='num2' onChange={ (event) => setNum2(Number(event.target.value)) } />
      <br />
      <select className='operator' name="operator" id="" onChange={ (event) => { setOperator(event.target.value); } }>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button className='btn' onClick={ calculate }>Calculate</button>
      <p className='result'>{ result }</p>
    </div>
  );
}

export default App;
