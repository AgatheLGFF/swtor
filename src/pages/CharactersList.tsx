import CharacterCard from "../components/cards/CharacterCard";
import styles from "./pages.module.css";

function CharactersList() {
  return (
    <main>
      <h1>Liste des personnages</h1>

      <ul className={styles.grid}>
        <li>
          <a href="/characters/1">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/2">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/3">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/4">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/5">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/6">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/7">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/8">
            <CharacterCard />
          </a>
        </li>
        <li>
          <a href="/characters/9">
            <CharacterCard />
          </a>
        </li>
      </ul>
    </main>
  );
}

export default CharactersList;
