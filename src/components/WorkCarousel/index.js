import React, { useState, useEffect, useCallback } from "react";
import { Center } from "./styles";
import CardConstruction from "../CardConstruction";
import request from "../../services/api";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

function WorkCarousel({ category }) {
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
      console.log("obras1", constructionsResponse);
      setWorks(constructionsResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <Center>
      <Swiper {...params}>
        {works?.map((work, index) => {
          return (
            <Link to={`/obra/${work.uuid}`}>
              <CardConstruction title={work.name} image={work.img} />
            </Link>
          );
        })}
      </Swiper>
    </Center>
  );
}

export default WorkCarousel;
