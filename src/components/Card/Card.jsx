import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ image, title, count, type = "album" }) {
  const label = type === "song" ? "Likes" : "Follows";

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.bottom}>
          <Chip
            label={`${count} ${label}`}
            size="small"
            sx={{
              backgroundColor: "var(--color-black)",
              color: "var(--color-white)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "10px",
            }}
          />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;