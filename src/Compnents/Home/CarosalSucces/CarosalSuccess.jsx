import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Carosal.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Item = ({ level, backgroundImage }) => {
  const className = "item level" + level;
  return (
    <CSSTransition classNames="item" timeout={1000}>
      <div
        className={className}
        style={{
          backgroundImage: `url(
      https://source.unsplash.com/400x200/?people
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>
    </CSSTransition>
  );
};

const Carousel = ({ items, active }) => {
  const [state, setState] = useState({
    items: items,
    active: active,
    direction: "",
  });
  const generateItems = () => {
    const { items, active } = state;
    const renderedItems = [];
    let level;

    for (let i = active - 2; i < active + 3; i++) {
      let index = i;

      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }

      level = active - i;

      renderedItems.push(<Item key={index} id={items[index]} level={level} />);
    }

    return renderedItems;
  };

  
  const moveLeft = () => {
    setState((prevState) => {
      const { active, items } = prevState;
      const newActive = (active - 1 + items.length) % items.length;

      return {
        ...prevState,
        active: newActive,
      };
    });
  };
  const moveRight = () => {
    setState((prevState) => {
      const { active, items } = prevState;
      const newActive = (active + 1) % items.length;

      return {
        ...prevState,
        active: newActive,
        direction: "right",
      };
    });
  };

  return (
    <div id="carousel" className="noselect" dir="rtl">
      <div className="arrow arrow-left" onClick={() => moveLeft()}>
        <FaArrowAltCircleLeft />    
      </div>
      <TransitionGroup>{generateItems()}</TransitionGroup>
      <div className="arrow arrow-right" onClick={() => moveRight()}>
        <FaArrowAltCircleRight />
      </div>
    </div>
  );
};
export default Carousel;
