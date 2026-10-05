import leftArrow from "../../assets/left-arrow.svg";
import styles from "./Carousel.module.css";

function CarouselLeftNavigation({ swiper, isBeginning }) {
  const hidden = !swiper || isBeginning;

  return (
    <button
      className={`${styles.navButton} ${styles.left}`}
      style={{ opacity: hidden ? 0 : 1 }}
      onClick={() => swiper && swiper.slidePrev()}
      aria-label="previous"
    >
      <img src={leftArrow} alt="" />
    </button>
  );
}

export default CarouselLeftNavigation;
