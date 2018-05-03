import React from 'react';

const MovieList = (props) => {
	const movieList = props.movies.map((movie, i) => {
		return <li key={i}>{movie}</li>	
	})
		
		return (
			<ul>
				{movieList}
			</ul>
			)
}

export default MovieList;