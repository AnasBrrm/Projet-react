import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { useState } from "react";
import { data } from "../data/recipes";

function Content() {
  const recipes = data;
  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="flex-fill container">
      <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
      <div className={`card p-20 flex-column${styles.contentCard}`}>
        <div
          className={`d-flex  flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            type="text"
            className="flex-fill"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
