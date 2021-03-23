import React, {useState} from 'react';
import {Container, Arrow, Slide} from './styles';
import Swiper from 'react-id-swiper';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import 'swiper/css/swiper.css';

const GraficCircle = () => {
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
    }
  return(
<Container>
  <Swiper {...params}>
    <Slide>
    <div className="single-chart">
          <svg viewBox="0 0 36 36" className="circular-chart green">
            <path className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
              stroke-dasharray="60, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">30%</text>
          </svg>
        </div>   
    </Slide>
    <Slide>
    <div className="single-chart">
          <svg viewBox="0 0 36 36" className="circular-chart green">
            <path className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
              stroke-dasharray="60, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">30%</text>
          </svg>
        </div>    
    </Slide>
    <Slide>
    <div className="single-chart">
          <svg viewBox="0 0 36 36" className="circular-chart green">
            <path className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
              stroke-dasharray="60, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">30%</text>
          </svg>
        </div>   
    </Slide>
  
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

export default GraficCircle;