import React, { useState } from "react";
import "react-animated-slider/build/horizontal.css";
import Captions from "./SliderSteps";

const slides = [
  {
    title: "First item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    title: "Second item",
    description: "incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Third item",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    title: "Fourth item",
    description: "Duis aute irure dolor in reprehenderit in",
  },
];

interface Props {
  slideCount: number;
}
const SliderComponentX: React.FunctionComponent<Props> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleCaptionClick = (index: string) => {
     // console.log(activeIndex)
      console.log()
    setActiveIndex(parseInt(index))
  }
  const size = slides.length;
  return (
    <div style={{backgroundColor: 'black'}}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div className={index === activeIndex ? "textSlider" :  "textSlider hide"}>{slide.description}</div>
        </div>
      ))}
      <Captions size={size} step={activeIndex} handleCaptionClick={handleCaptionClick}/>
    </div >
  );
};

export default SliderComponentX;
