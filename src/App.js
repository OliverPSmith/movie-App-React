import { useState, useEffect } from 'react';
import MovieListHeading from './components/MovieListHeading';
import MoviesList from './components/MoviesList';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

const App = () => {
  const [movies, setMovies] = useState([
    {
            "Title": "Carry On, Munna Bhai",
            "Year": "2006",
            "imdbID": "tt0456144",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2ZmMDMwODgtMzA5MS00MGU0LWEyYTgtYzQ5MmQzMzU2NTVkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Camping",
            "Year": "1969",
            "imdbID": "tt0064133",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODEyNDA5OTEtYWI1Ny00NDhmLWEyZGQtYzYxY2FkMDM3ZmI2XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Screaming!",
            "Year": "1966",
            "imdbID": "tt0060214",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmY4OTI5NGQtZGJmMy00YTQxLWIwYmUtMTliNTljNzg0MmM4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Up the Khyber",
            "Year": "1968",
            "imdbID": "tt0062782",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjg0MTY2NGEtYWZlYS00YjBiLTgwYmQtZGY5NGFhMzc2MTkyXkEyXkFqcGdeQXVyMzk5OTkyNDE@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Cleo",
            "Year": "1964",
            "imdbID": "tt0057918",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MDkwNzg3M15BMl5BanBnXkFtZTgwODk1NDUzMzE@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Abroad",
            "Year": "1972",
            "imdbID": "tt0069847",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNWRkZmMwY2UtMDU0Ny00OGJhLWFkNmItNmY1YTIzNTg4ZDhlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Doctor",
            "Year": "1967",
            "imdbID": "tt0061450",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWJkZDEyMDAtMWJlMy00NmFhLTg4YjMtNTllMTcwZDBlOWNiXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Jatta",
            "Year": "2012",
            "imdbID": "tt2245544",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTdhMGIzNDAtNGJlNi00MTJhLThkOWYtZTM4MTg0OGY1ZGU4XkEyXkFqcGdeQXVyMzc0NzU5MTc@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on at Your Convenience",
            "Year": "1971",
            "imdbID": "tt0066895",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzgzNTUzMTctMTI3MS00MDc3LWIzOTctNDVkODgxZTIxOGYwXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
        },
        {
            "Title": "Carry on Matron",
            "Year": "1972",
            "imdbID": "tt0068339",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGMyYmZiYjQtZjEzNC00MjQxLWJiMzEtZGRmOWZhNWZiOTA2XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
        }
  ]);
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
