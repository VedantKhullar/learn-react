import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { useEffect } from 'react';
import MovieCard from './components/MovieCard';
import {useDebounce} from 'react-use'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');


  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm])
  


  const API_BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept:'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }
  const fetchMovies = async (query) => {

    setErrorMessage('');
    setIsLoading(true);
    try{
      const url = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
      `${API_BASE_URL}/discover/movie?language=en-US&page=1&sort_by=popularity.desc`
      const response = await fetch(url, API_OPTIONS);
      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovieList(data.results || []);
    } catch(error){
      console.error('Error in fetching movies', error);
      setErrorMessage('There was an error fetching the movie list.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm])
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="../public/hero.png" alt="Hero Banner" />
            <h1>
              Find <span className='text-gradient'>Movies</span> You Will Enjoy Without Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
          <section className='all-movies'>
            <h2 className='mt-[40px]'>All Movies</h2>
            {isLoading ? (
              <p className='text-white'>Loading...</p>
            ): errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ): (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
