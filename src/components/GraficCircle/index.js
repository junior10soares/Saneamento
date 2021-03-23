import React, {useEffect, useState} from 'react';
import {Container, Arrow} from './styles';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const GraficCircle = ({data}) => {
  const [swiper, updateSwiper] = useState(null);
  const [workPhase, setWorkPhase] = useState(data); 
  const params = {
    swiper,
    slidesPerView: 3,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    freeMode: true,
    speed: 500,
    shouldSwiperUpdate: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
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
  <Container className="tester">
    <Swiper {...params}>
        {data?.map((item) => (   
        <div className="single-chart" key={item.uuid}>
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
                <text x="18" y="20.35" className="percentage">{`${item.percentage}%`}</text>
              </svg>
                <p className="title">{item.name}</p>
            </div>
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

export default GraficCircle;