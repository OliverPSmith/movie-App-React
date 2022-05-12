import React from 'react';

const MoviesList = (props) => {
    const FavouriteComponent = props.FavouriteComponent;
  return (
    <>
        {props.movies.map((movie) => (
            <div className="movie-item">
                <div className="item-title">
                    <h3>{movie.Title}</h3>
                </div>
                <div className="item-main">
                    <img src={movie.Poster} alt="movie" />
                    <div onClick={() => props.handleFavouriteClick(movie)} className="overlay">
                        <FavouriteComponent />
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default MoviesList;
