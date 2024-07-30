import React from 'react';
import './App.css';
import ErrorBoundary from './component/ErrorBoundary.jsx';
import Color from './component/Color.jsx';

class BuggyCounter extends React.Component{
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () =>{
    this.setState({ counter: this.state.counter + 1 })
  }

  render(){
    if( this.state.counter === 5){
      throw new Error('I crahed!')
    } else {
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
    }
  }
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <BuggyCounter />
      <hr />
      <Color />
    </div>
  );
}

export default App;
