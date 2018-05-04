import React, { Component } from 'react';
import Modal from "../EditModal"

class MovieList extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		}
	}


	render() {
		console.log(this.props, "this is props");
		const movieList = this.props.movies.map((movie, i) => {
			return (
				<li key={i}>{movie}
				<button id={i} onClick={this.props.removeMovie} >Delete this Movie</button>
				<button onClick={this.props.editMovie}>Edit this Movie</button>
			</li>	)
		})
		console.log(movieList, "this is movieList");
		
		return (
			<div>
				<ul>
					{movieList}
				</ul>

			</div>
			)
	}

}

export default MovieList;


// EXTRA SHIT: 


	// toggleEditModal = (i) => {
 //  		this.setState({
 //  			isOpen: !this.state.isOpen
 //  		});
 //  		console.log(i);
 //  	}

 			// 	<Modal show={this.state.isOpen} onClose={this.toggleEditModal}> <h3>Edit Movie</h3>
				// 	<form>
				// 		<input type="text" />
				// 	</form>
				// </Modal>