import { useEffect } from 'react';
import ApiMovie from "./ApiMovie";
import './App.css';

function App() {
  useEffect(() => {
      const loadAllMovies = async () => {
        let moviesList = await ApiMovie.getHomeMovies()

        console.log(moviesList)
      }
      loadAllMovies()
  }, [])

  return (
    <div className="App">Hello World</div>
  );
}

export default App;
