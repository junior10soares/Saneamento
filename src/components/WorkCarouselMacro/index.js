import React, { useState, useEffect, useCallback } from "react";
import { Center } from "./styles";
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { CardConstructionMacro } from "../CardConstructionMacro";
import request from "../../services/api";

function WorkCarouselMacro({ category }) {
  const [works, setWorks] = useState([]);
  const [swiper, updateSwiper] = useState(null);

  const fetchWorkVideos = useCallback(async () => {
    try {
      const constructionsResponse = await request({
        url: `work`,
        params: category
          ? {
              "filters[][work_category.uuid@equal]": category,
            }
          : {},
      });
      setWorks(constructionsResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const constructionsResponse = useCallback(() => {
    api.get('work', {
      params: category
      ? {
          "filters[][work_category.uuid@equal]": category,
        }
      : {},
    }).then(({ data }) => setWorks(data.data));
   }, [])

  useEffect(() => {
    fetchWorkVideos();
  }, [fetchWorkVideos]);

  const params = {
    swiper,
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 0,
    loopFillGroupWithBlank: true,
    freeMode: true,
    getSwiper: updateSwiper,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <Center>
        <Swiper {...params}>
          {works?.map((work) => (
                 <Link href={`/obra/${work?.uuid}`}>
                <CardConstructionMacro title={work?.name} image={work?.img} />
            </Link> 
  ))}
        </Swiper>
    </Center>
  );
}

export default WorkCarouselMacro;
