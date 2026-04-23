 import { useEffect, useState } from "react";
import { useParams } from "react-router";

type MovieDetailParams = {
  id: string;
};

export default function FilmsDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams<MovieDetailParams>();

  useEffect(() => {
    async function loadMovie() {
      const response = await fetch(`https://swapi.info/api/films/${id}`);
      const movie = await response.json();
      setMovie(movie);
    }

    loadMovie();
  }, [id]);
    return(
        <main>
            <h1>Détails du films</h1>
            {movie ? "Chargé" : "Non chargé"}
        </main>
);
}