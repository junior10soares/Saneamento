import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

import {
    OverlayWrapper,
    ModalCardWrapper,
    ModalCard,
    ModalClose,
    ModalContent,
    ModalNav
  } from "./styles";

import BorderLeft from '../BorderLeft';
import BorderRight from '../BorderRight';

export function ModalSlide({ toggleModal, duration = 300, currentSlide, children }){
    const [animationBorder, setAnimationBorder] = useState(false);
    const [direction, setDirection] = useState("");
    const [current, setCurrent] = useState(0);
    const [slides, setSlides] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
      
      setCurrent(currentSlide);
      setTotal(React.Children.count(children))
      setSlides(React.Children.toArray(children))

      document.addEventListener("keydown", keyPress, false);

      return () => {
        document.removeEventListener("keydown", keyPress, false);
      }
    }, [])

    function keyPress ({ keyCode }) {
      const ARROW_RIGHT = 39;
      const ESC = 27;
      const ARROW_LEFT = 37;

      switch (keyCode) {
        case ARROW_RIGHT:
          animateRight();
          break;
        case ARROW_LEFT:
          animateLeft();
          break;
        case ESC:
          toggleModal();
          break;
        default:
          break;
      }
    }

    function handleAnimation (direction) {
      setAnimationBorder(true);
      setDirection(direction);

      setTimeout(() => {
        setAnimationBorder(false);
      }, duration);
    }

    function animateLeft () {
      handleAnimation("left")

      current === 0 ? setCurrent(total - 1) : setCurrent(current - 1)
    }

    function animateRight () {
      handleAnimation("right")

      current + 1 === total ? setCurrent(0) : setCurrent(current + 1)
    }

    return (
      <OverlayWrapper>
        <ModalClose onClick={() => toggleModal()}>
          <FiX />
        </ModalClose>
        <ModalNav>
          <FiArrowLeft onClick={() => animateLeft()} />
          <FiArrowRight onClick={() => animateRight()} />
        </ModalNav>
        <ModalCardWrapper>
          <ModalCard>
            <ModalContent>{slides[current]}</ModalContent>
          </ModalCard>
        </ModalCardWrapper>
      </OverlayWrapper>
    );
}