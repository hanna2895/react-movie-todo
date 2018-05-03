import React, { Component } from 'react';
import MovieList from "../MovieList"
import CreateMovie from '../CreateMovie'

class MovieContainer extends Component {
	constructor() {
		super();
		this.state = {
			movies: ['Forrest Gump', 'Dogma', 'Toy Story', "Lion King"]
		}
	}

	addMovie = (movie, e) => {
		e.preventDefault();

		console.log(movie, 'this is the movie');
		console.log(e.currentTarget);
		console.log(e.target);
		this.setState({
			movies: [...this.state.movies, movie]
		});	
	}
	render() {
		return (
			<div>
				<span>Hi {this.props.username} </span>
				<MovieList movies={this.state.movies}/>
				<CreateMovie addMovie={this.addMovie}/>
			</div>
			)
	}
}

export default MovieContainer;