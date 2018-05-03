import React, { Component } from 'react';
import './style.css'

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			isLogged: false
		}
	}
	handleInput = (e) => {
		this.setState({
			username: e.currentTarget.value,
		})	
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username)	
	}


	render () {
		// console.log(this.state, "this is state");
		return (
			<div>
				<h5>Username</h5>
				<input type="text" onChange={this.handleInput} value={this.state.username} />
				<button onClick={this.handleSubmit}>Submit</button>
			</div>
			)
	}
}

export default Login;

// can also refactor this to be a purely functional component by moving the handleInput and handleSubmit stuff up into app.js