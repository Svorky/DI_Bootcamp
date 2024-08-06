import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate.jsx';
import TasksList from './components/TasksList.jsx';

function App() {
  const [date, setDate] = useState('2024-05-14');
  return (
    <div className="App">
      <h2>List of: { date }</h2>
      <TaskCreate date={ date } setDate={ setDate } />
      <TasksList date={ date } />
    </div>
  );
}

export default App;
