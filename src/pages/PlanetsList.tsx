import PlanetCard from "../components/cards/PlanetCard";
import styles from "./pages.module.css";


function PlanetsList() {
  return (
    <main>
      <h1>Liste des planètes</h1>

      <ul className={styles.grid}>
        <li>
          <a href="/planets/1">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/2">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/3">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/4">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/5">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/6">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/7">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/8">
            <PlanetCard />
          </a>
        </li>
        <li>
          <a href="/planets/9">
            <PlanetCard />
          </a>
        </li>
      </ul>
    </main>
  );
}

export default PlanetsList;
