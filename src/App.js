import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MovieContainer from './MovieContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      username: ''
    }
  }

  login = (username) => {
    this.setState({
      isLogged: true,
      username: username
    }) 
  }
  render() {
    console.log(this.state, "this is state");
    // instead of if else use a ternary operator
    return (
      <div className="App">
        {this.state.isLogged ? <MovieContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
