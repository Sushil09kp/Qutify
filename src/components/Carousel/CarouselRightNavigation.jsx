import rightArrow from "../../assets/right-arrow.svg";
import styles from "./Carousel.module.css";

function CarouselRightNavigation({ swiper, isEnd }) {
  const hidden = !swiper || isEnd;

  return (
    <button
      className={`${styles.navButton} ${styles.right}`}
      style={{ visibility: hidden ? "hidden" : "visible" }}
      onClick={() => swiper && swiper.slideNext()}
      aria-label="next"
    >
      <img src={rightArrow} alt="" />
    </button>
  );
}

export default CarouselRightNavigation;