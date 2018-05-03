import React, { Component } from 'react';
import MovieList from "../MovieList"

class MovieContainer extends Component {
	constructor() {
		super();
		this.state = {
			movies: ['Forrest Gump', 'Dogma', 'Toy Story', "Lion King"]
		}
	}
	render() {
		return (
			<div>
				<span>Hi {this.props.username} </span>
				<MovieList movies={this.state.movies}/>
			</div>
			)
	}
}

export default MovieContainer;