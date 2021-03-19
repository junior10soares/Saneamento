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
    <Container>
        <Swiper {...params}>
            {content?.map((video) =>(
                  <Slide key={video?.uuid}>
                  <iframe src={video?.url} allowfullscreen frameBorder="0"></iframe>
                  </Slide>            
            ))}            
  
       </Swiper>
        <Arrow direction="left" onClick={goPrev}>
            <MdChevronLeft />
            </Arrow>
            <Arrow direction="right" onClick={goNext}>
            <MdChevronRight />
        </Arrow>
        </Container>



    );
}

export default CardVideo;