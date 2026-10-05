import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.toggle}>Collapse</button>
      </div>
      <div className={styles.grid}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;