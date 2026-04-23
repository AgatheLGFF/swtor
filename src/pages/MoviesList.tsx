import { useEffect, useState } from "react";
import MovieCard from "../components/cards/MovieCard";
import type { Movie } from "../types/star-wars";
import styles from "./pages.module.css";

function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadMovies() {
      const response = await fetch("https://swapi.info/api/films");
      const movies = await response.json();
      setMovies(movies);
    }

    loadMovies();
  }, []);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function getMovieId(movieUrl: string) {
    // ["https:", "swapi.info", "api", "films", "ID"]
    return movieUrl.split("/").reverse()[0];
  }

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <h1>Liste des films</h1>

      <input type="text" value={search} onChange={handleSearchChange} />

      <ul className={styles.grid}>
        {filteredMovies.map((movie) => (
          <li key={movie.episode_id}>
            <a href={`/movies/${getMovieId(movie.url)}`}>
              <MovieCard title={movie.title} episode={movie.episode_id} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MoviesList;
