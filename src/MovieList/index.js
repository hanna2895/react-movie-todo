import React from 'react';

const MovieList = (props) => {
	console.log(props, "this is props");
	const movieList = props.movies.map((movie, i) => {
		return <li key={i}>{movie}<button id={i} onClick={props.removeMovie} >Delete this Movie</button></li>	
	})
		
		return (
			<ul>
				{movieList}
			</ul>
			)
}

export default MovieList;