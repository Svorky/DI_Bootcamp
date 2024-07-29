import './App.css';
import Car from './components/Car.jsx';
import Color from './components/Color.jsx';
import Events from './components/Events.jsx';
import Phone from './components/Phone.jsx';

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div className="App">
      <Car {...carinfo} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
