import { useRef } from 'react';
import './App.css';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeDate } from './features/tasks/tasksSlice.js';

function App() {

  const dateRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dateRef.current.value = new Date().toLocaleDateString('en-CA');
  }, []);

  const handleDate = () => {
    dispatch(changeDate({date: dateRef.current.value}))
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <label htmlFor="date">Choose date</label>
      <input ref={ dateRef } type="date" name="date" id="" onChange={handleDate}/>
      <br />
      <br />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
