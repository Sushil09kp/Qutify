import rightArrow from "../../assets/right-arrow.svg";
import styles from "./Carousel.module.css";

function CarouselRightNavigation({ swiper, isEnd }) {
  const hidden = !swiper || isEnd;

  return (
    <button
      className={`${styles.navButton} ${styles.right}`}
      style={{ opacity: hidden ? 0 : 1 }}
      onClick={() => swiper && swiper.slideNext()}
      aria-label="next"
    >
      <img src={rightArrow} alt="" />
    </button>
  );
}

export default CarouselRightNavigation;