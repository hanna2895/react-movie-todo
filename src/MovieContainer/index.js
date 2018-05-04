import React, { Component } from 'react';
import MovieList from "../MovieList"
import CreateMovie from '../CreateMovie'
// import Modal from '../EditModal' <-- this is the one I tried to make on myown
import Modal from '../ClassModal'

class MovieContainer extends Component {
	constructor() {
		super();
		this.state = {
			movies: ['Forrest Gump', 'Dogma', 'Toy Story', "Lion King"],
			showEdit: false, // this piece of state will toggle the edit modal
			editedMovie: ''
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

  	closeEdit = (movie) => {
  		const index = this.state.movies.indexOf(this.state.editedMovie); // indexOf returns the position of an object in an array
  		const movies = this.state.movies;
  		movies[index] = movie

  		this.setState({
  			showEdit: false,
  			movies: movies
  		})
  	}

  	editMovie = (e) => {
  		const id = e.currentTarget.previousSibling.id;
  		console.log(id);
  		this.setState({
  			showEdit: true,
  			editedMovie: this.state.movies[id] // get the movie that you clicked in order to be able to display it in the modal
  		})
  	}

	render() {
		return (
			<div>
				<span>Hi {this.props.username} </span>
				<MovieList movies={this.state.movies} removeMovie={this.removeMovie} editMovie={this.editMovie}/>
				<CreateMovie addMovie={this.addMovie}/>
				<Modal showEdit={this.state.showEdit} editedMovie={this.state.editedMovie}/>
			</div>
			)
	}
}

export default MovieContainer;

// to edit movies
// create a modal that pops up when you click edit movie
// that modal should have an input field, when you click ok on that modal, that stuff should get stored in the page's state and then updated