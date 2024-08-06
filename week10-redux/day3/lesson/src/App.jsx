import './App.css';
import Counter from './features/counter/Counter.jsx';
import Users from './features/users/Users.jsx';
function App() {
  return (
    <div className='App'>
      <h2>Rredux Toolkit</h2>
      <Counter />
      <Users />
    </div>
  );
}

export default App;
