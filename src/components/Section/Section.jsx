import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const GENRES_URL = "https://qtify-backend.labs.crio.do/genres";

const tabSx = {
  fontFamily: "Poppins, sans-serif",
  textTransform: "none",
  fontSize: "14px",
  minHeight: 0,
  minWidth: 0,
  padding: "8px 14px",
};

function Section({ title, endpoint, type = "album" }) {
  const isSong = type === "song";
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  useEffect(() => {
    if (!isSong) return;
    axios
      .get(GENRES_URL)
      .then((res) => {
    const order = ["rock", "pop", "jazz", "blues"];
    setGenres(
        [...res.data.data].sort(
      (a, b) => order.indexOf(a.key) - order.indexOf(b.key)
    )
  );
})
      .catch((err) => console.error(err));
  }, [isSong]);

  const visibleItems =
    isSong && selectedGenre !== "all"
      ? items.filter((song) => song.genre.key === selectedGenre)
      : items;

  const renderCard = (item) => (
    <Card
      image={item.image}
      title={item.title}
      count={isSong ? item.likes : item.follows}
      type={type}
    />
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {!isSong && (
          <button
            className={styles.toggle}
            onClick={() => setShowCarousel((prev) => !prev)}
          >
            {showCarousel ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isSong && (
        <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "var(--color-primary)" } }}
          sx={{ minHeight: 0, marginBottom: "20px" }}
        >
          <Tab value="all" label="All" sx={tabSx} disableRipple />
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
              sx={tabSx}
              disableRipple
            />
          ))}
        </Tabs>
      )}

      {isSong || showCarousel ? (
        <Carousel
          key={selectedGenre}
          data={visibleItems}
          renderComponent={renderCard}
        />
      ) : (
        <div className={styles.grid}>
          {visibleItems.map((item) => (
            <div key={item.id}>{renderCard(item)}</div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;