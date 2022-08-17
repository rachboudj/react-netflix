import { useEffect, useState } from 'react';
import ApiMovie from "./ApiMovie";
import './App.css';

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
            <div>{item.title}</div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
