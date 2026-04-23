import styles from "./cards.module.css";

interface MovieCardProps {
  title: string;
  episode: number;
}

function MovieCard(props: MovieCardProps) {
  return (
    <article className={styles.card}>
      <h2>
        <span>{props.episode}</span> {props.title}
      </h2>
    </article>
  );
}

export default MovieCard;
