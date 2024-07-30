import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
  }

  handleClick = (event) => {
    this.setState({ favoriteColor: 'blue' });
  };

  deleteHeader = () => {
    this.setState({ ...this.state, show: false });
  };

  shouldComponentUpdate() {
    return true;
    // return false;
  }

  componentDidUpdate() {
    console.log('afer update');
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    return <>
      <div>My favorite color is { this.state.favoriteColor }</div>
      <button onClick={ this.handleClick }>Change color</button>
      { this.state.show && <Child /> }
      <button onClick={ this.deleteHeader }>Delete header</button>
    </>;
  }

}

export default Color;

class Child extends React.Component {


  componentWillUnmount() {
    alert('unmount');
  }
  render() {
    return <h1>Hello world!</h1>;
  }
}