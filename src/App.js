import { useEffect, useState } from 'react';
import ApiMovie from "./ApiMovie";
import './App.css';
import MovieSection from './components/MovieSection';

function App() {
  const [movieList, setMoviesList] = useState([])

  useEffect(() => {
      const loadAllMovies = async () => {
        let list = await ApiMovie.getHomeMovies()

        console.log(list)
        setMoviesList(list)
      }
      loadAllMovies()
  }, [])

  return (
    <div className="container">
      <section className="list">
        {
          movieList.map((item, key) => (
            <MovieSection />
          ))
        }
      </section>
    </div>
  );
}

export default App;
