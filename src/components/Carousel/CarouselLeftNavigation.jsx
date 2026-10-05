import leftArrow from "../../assets/left-arrow.svg";
import styles from "./Carousel.module.css";

function CarouselLeftNavigation({ swiper, isBeginning }) {
  const hidden = !swiper || isBeginning;

  return (
    <button
      className={`${styles.navButton} ${styles.left}`}
      style={{ display: hidden ? "none" : undefined }}
      onClick={() => swiper && swiper.slidePrev()}
      aria-label="previous"
    >
      <img src={leftArrow} alt="" />
    </button>
  );
}

export default CarouselLeftNavigation;
