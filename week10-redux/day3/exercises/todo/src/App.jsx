import './App.css';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
