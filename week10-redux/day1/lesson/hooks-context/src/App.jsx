import './App.css';
import { createContext, useReducer, useState } from 'react';
import Display from './components/Display.jsx';
import Action from './components/Action.jsx';

export const AppContext = createContext();

const initializerArg = {
  count: 0
}

const reducer = (state, action) => {
  if(action.type === 'increment'){
    return {...state, count: state.count + 1}
  } else if (action.type === 'decrement'){
    return {...state, count: state.count - 1}
  }
  return state
}

function App() {

  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('')
  const [state, dispatch] = useReducer(reducer, initializerArg)

  return (
    <>
      <AppContext.Provider value={{count, setCount, title, setTitle}}>
        <Display />
        <Action />
      </AppContext.Provider>
      <section>
        <h2>use state</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>+</button>
        {count}
        <button onClick={prev=>prev-1}>-</button>
      </section>
      <section>
      <h2>use reducer</h2>
        <button onClick={()=> dispatch({type:'increment'})}>+</button>
        {state.count}
        <button onClick={()=> dispatch({type:'decrement'})}>-</button>
      </section>
    </>
  );
}

export default App;
