import React, { useState } from "react";
import { relative } from "path";

const Captions: React.FunctionComponent<{
  step: number;
  size: number;
  handleCaptionClick: Function;
}> = ({ step, size, handleCaptionClick }) => {
  let items = [];
  const handleClick = (event: any) => {
    event?.currentTarget.id && handleCaptionClick(event?.currentTarget.id)
  };
  for (var i = 0; i < size; i++) {
    items.push(
      <li
        id={i+""}
        key={i}
        data-target="#carouselExampleCaptions"
        data-slide-to={i}
        className={i === step ? "active" : ""}
        onClick={(e) => handleClick(e)}
      ></li>
    );
  }
  console.log(items);
  return (
      <ol className="carousel-indicators" >{items}</ol>
  );
};

export default Captions;
