import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleClick = (name) => {
    languages.find( l => l.name === name).votes++
    setLanguages([...languages])
  }
  return (
    <div className='App'>
      <h1>Vote Your Language!</h1>
      <div className='languages'>
        {
          languages.map(language => {
            return <div key={language.name} className='language'>
              <div className='voteCount'>{language.votes}</div>
              <div className='languageName'>{language.name}</div>
              <button onClick={()=>handleClick(language.name)}>Click Here</button>
            </div>;
          })
        }
      </div>
    </div>
  );
}

export default App;
