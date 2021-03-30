import React, {useEffect, useState} from 'react';
import {Container, Trash, Arrow, Single, Modal} from './styles';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { FiTrash } from 'react-icons/fi';
import { ListItemAvatar } from '@material-ui/core';


const GraficCircle = ({data, visibleTrash, action}) => {
  const [swiper, updateSwiper] = useState(null);
  const [isShow, setIsShown] = useState(false);
  const [selected, setSelected] = useState([]);
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

    const handleHover = (uuid) => {
       const filter = data.filter((item) => item.uuid === uuid);
      setSelected(filter[0]);
      setIsShown((state) => !state);

    }
    console.log('isShow',isShow);

  return(
  <Container>
    <Swiper {...params}>
        {data?.map((item) => (       
             <Single className="single-chart" key={item.uuid} onClick={() => handleHover(item.uuid)}>                 
                    {isShow && selected.uuid === item.uuid ? (
              <Modal open={isShow}>
                <div>
                {selected && selected.description}
                </div>
               </Modal>
            ) : ('')}
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  stroke-dasharray={item.percentage + "," + "100"}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />                
                <text x="18" y="20.35" className="percentage">{`${item.percentage}%`}</text>             
              </svg>             
                <p className="title">{item.name}</p>               
                <Trash 
                visibleTrash={visibleTrash}
                onClick={() => action(item.uuid)}
                >
                <FiTrash className="visibleTrash" />
                </Trash>
            </Single>       
          
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