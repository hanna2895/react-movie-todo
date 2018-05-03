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

	removeMovie = (e) => {
    	console.log(e.currentTarget.id);
    	const id = e.currentTarget.id
    	// e.preventDefault()
    	console.log("this is happening");
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

// TO DELETE MOVIES
// create a button on the list 
// that button should be able to detect which thing it is and remove it from this.state.movies array
// look at crimes list for practice