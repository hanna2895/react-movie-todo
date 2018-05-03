import React, { Component } from 'react';

class CreateMovie extends Component {
	constructor() {
		super();
		this.state = {
			movie: ""
		}
	}

	updateMovie = (e) => {
		const movie = e.currentTarget.value;
		this.setState({movie: movie})
	}
	render() {
		console.log(this.state, "state in createMovie");
		return (
			<form onSubmit={this.props.addMovie.bind(null, this.state.movie)}>
				<label>
					Movie: 
				</label>
				<input type="text" name="movie" onChange={this.updateMovie}/> 
				<input type="Submit"/>
			</form>
		)
	}

}

export default CreateMovie;