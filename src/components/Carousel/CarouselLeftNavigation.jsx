import leftArrow from "../../assets/left-arrow.svg";
import styles from "./Carousel.module.css";

function CarouselLeftNavigation({ swiper, isBeginning }) {
  if (!swiper || isBeginning) return null;
  return (
    <button
      className={`${styles.navButton} ${styles.left}`}
      onClick={() => swiper.slidePrev()}
      aria-label="previous"
    >
      <img src={leftArrow} alt="" />
    </button>
  );
}

export default CarouselLeftNavigation;