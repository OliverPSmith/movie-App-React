import { useState, useEffect } from 'react';
import MovieListHeading from './components/MovieListHeading';
import MoviesList from './components/MoviesList';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=eb31f3fd`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('my-movie-app')) || []; 
      setFavourites(movieFavourites);
  }, []);

  const saveToLocaleStorage = (items) => {
    localStorage.setItem('my-movie-app', JSON.stringify(items));
  } 

  const AddFavouriteMovie = (movie) => {
    const newFavouritesList = [...favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID), movie];
    setFavourites(newFavouritesList);
    saveToLocaleStorage(newFavouritesList); 
  }

  const RemoveFavouriteMovie = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID);
      setFavourites(newFavouritesList);
      saveToLocaleStorage(newFavouritesList);
  };

  return (
    <div className="container">
      <div className="heading-row heading-top">
        <MovieListHeading  
          heading='Movies'/>
        <SearchBox 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} />
      </div>
      <div className="movie-row">
        <MoviesList 
          movies={movies}
          handleFavouriteClick={AddFavouriteMovie}
          FavouriteComponent={AddFavourite} /> 
      </div>

      <div className="heading-row fav-heading">
        <MovieListHeading  
          heading='Favourites'/>
      </div>
      <div className="movie-row fav-movies">
        <MoviesList 
          movies={favourites}
          handleFavouriteClick={RemoveFavouriteMovie}
          FavouriteComponent={RemoveFavourite}  /> 
      </div>
      
    </div>
  );
}

export default App;
