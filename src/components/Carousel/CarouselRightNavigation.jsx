import rightArrow from "../../assets/right-arrow.svg";
import styles from "./Carousel.module.css";

function CarouselRightNavigation({ swiper, isEnd }) {
  if (!swiper || isEnd) return null;
  return (
    <button
      className={`${styles.navButton} ${styles.right}`}
      onClick={() => swiper.slideNext()}
      aria-label="next"
    >
      <img src={rightArrow} alt="" />
    </button>
  );
}

export default CarouselRightNavigation;