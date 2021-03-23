import React, {useEffect, useState} from 'react';
import {Container, Trash, Arrow} from './styles';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { FiTrash } from 'react-icons/fi';

const GraficCircle = ({data, visibleTrash, action}) => {
  const [swiper, updateSwiper] = useState(null);
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
  <Container>
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
                <Trash 
                visibleTrash={visibleTrash}
                onClick={action}
                >
                <FiTrash className="visibleTrash" />
                </Trash>
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