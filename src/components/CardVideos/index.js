import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import 'swiper/css/swiper.css';
import {Container, Arrow, Slide} from './styles';

const CardVideo = ({content}) => {
    const [swiper, updateSwiper] = useState(null);
    const params = {
        swiper,
        slidesPerView: 3,
        spaceBetween: 30,
        Center: true,
        draggable: true,
        simulateTouch: true,
        loopFillGroupWithBlank: true,
        freeMode: true,
        getSwiper: updateSwiper,
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
      
    return(
          <Slide key={content?.uuid}>
              <iframe src={content?.url.replace('watch?v=', 'embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Slide>
    );
}

export default CardVideo;