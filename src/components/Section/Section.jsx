import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [showCarousel, setShowCarousel] = useState(true); // naya

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  const renderCard = (album) => (
    <Card image={album.image} title={album.title} follows={album.follows} />
  ); // naya

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <button
          className={styles.toggle}
          onClick={() => setShowCarousel((prev) => !prev)}
        >
          {showCarousel ? "Show All" : "Collapse"}
        </button>
      </div>
      {showCarousel ? (
        <Carousel data={albums} renderComponent={renderCard} />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <div key={album.id}>{renderCard(album)}</div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;