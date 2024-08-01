import { useEffect, useState } from 'react';
import './App.css';
import quotes from './config/QuotesDatabase.js';
import numberRandomInteger from './utils/randomInteger.mjs';

function App() {
  const [quote, setQuote] = useState({ idx: 0, data: quotes[0] });
  const [color, setColor] = useState('rgb(150, 30, 57)');

  useEffect(() => {

    document.documentElement.style.backgroundColor = color;

  }, [color]);

  const handleClick = () => {
    let index;
    do {
      index = numberRandomInteger(0, quotes.length-1);
    } while(quote.idx === index);

    setQuote({ idx: index, data: quotes[index] });
    randomColor();
  };

  const randomColor = () => {
    const color = `rgb(
      ${numberRandomInteger(0, 155)},
      ${numberRandomInteger(0, 155)},
      ${numberRandomInteger(0, 155)})`;
    setColor(color);
  };

  return (
    <div>
      <div className='quotebox' style={ { backgroundColor: 'white' } }>
        <div className='fadeIn' style={ { color: color } }>
          <h1 id='quote'>
            { quote.data.quote }
          </h1>
          <h5 id='author'>-{ quote.data.author }-</h5>
        </div>
        <button id='newquote' style={ { backgroundColor: color } } onClick={ handleClick }>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
