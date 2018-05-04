import React, { Component } from 'react';
import MovieList from "../MovieList"
import CreateMovie from '../CreateMovie'
// import Modal from '../EditModal' <-- this is the one I tried to make on myown
import Modal from '../ClassModal'

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
			movies: [...this.state.movies, movie],
		});	
	}

	removeMovie = (e) => {
    	const id = e.currentTarget.id
    	// e.preventDefault()
    	this.setState({movies: this.state.movies.filter((movie, i) => i != id)})
  	}
	render() {
		return (
			<div>
				<span>Hi {this.props.username} </span>
				<MovieList movies={this.state.movies} removeMovie={this.removeMovie}/>
				<CreateMovie addMovie={this.addMovie}/>
			</div>
			)
	}
}

export default MovieContainer;

// to edit movies
// create a modal that pops up when you click edit movie
// that modal should have an input field, when you click ok on that modal, that stuff should get stored in the page's state and then updated