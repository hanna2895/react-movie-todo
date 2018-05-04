import React, { Component } from 'react';
import './style.css'

// props are immutable, so you can't type anything into the edit field. we need to change it to a class.

// use arrow functions to automatically bind 'this' to the component
// not necessary for pre-defined functions like render, componentWillReceiveProps, etc. 

class Modal extends Component {
	constructor(props) { // you can pass props to the constructor if you want to access them inside this function
							// the constructor function only gets called one time in the lifetime of the component
		super(props);
		this.state = {
			inputVal: '' 
		}
	}

	handleInput = (e) => {
		this.setState({inputVal: e.currentTarget.value})
	}

	componentWillReceiveProps(nextProps) { // another built-in function
		// this --> lifecycle hook <-- will allow you to set state. this is often used to optimize react apps, if you need extra speed. 
		// allows you to set the state every time the render function is called.
		this.setState({
			inputVal: nextProps.editedMovie
		})
	}
	
	render() {
		const cssClass = this.props.showEdit ? 'Modal-Open' : "Modal-Closed"; // need this.props here
		console.log(this.state, "this.state", this.props, "this.props");
		return (
			<div className={cssClass}>
				<input type="text" value={this.state.inputVal} onChange={this.handleInput}/>
				<button> Edit </button>
			</div>
		)
	}
	

}

export default Modal;