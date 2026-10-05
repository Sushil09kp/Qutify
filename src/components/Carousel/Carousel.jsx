import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import styles from "./Carousel.module.css";

function Carousel({ data, renderComponent }) {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateEdges = (s) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <div className={styles.wrapper}>
      <CarouselLeftNavigation swiper={swiper} isBeginning={isBeginning} />
      <CarouselRightNavigation swiper={swiper} isEnd={isEnd} />
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        onSwiper={(s) => {
          setSwiper(s);
          updateEdges(s);
        }}
        onSlideChange={updateEdges}
        onResize={updateEdges}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;