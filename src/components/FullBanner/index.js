import React, {useState} from "react";
import { Banner, CarouselItem, Slide, Arrow } from "./style";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import {baseURL} from '../../services/api';

export function FullBanner({ images }) {
  const [swiper, updateSwiper] = useState(null);

  const params = {
    swiper,
    speed: 500,
    shouldSwiperUpdate: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    getSwiper: updateSwiper,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"></span>`;
      },
    },
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <Banner>
     <Swiper {...params}>
         {images.map((image) => (
          <CarouselItem>
            <img src={baseURL + "/" + image} />
          </CarouselItem>
        ))}
     </Swiper>
     <Arrow direction="left" onClick={goPrev}>
        <MdChevronLeft />
      </Arrow>
      <Arrow direction="right" onClick={goNext}>
        <MdChevronRight />
      </Arrow>
      {/* <PlayerButton />
      <img src="/banner.png" alt="Banner Sanear" width="100%" /> */}
    </Banner>
  );
}
