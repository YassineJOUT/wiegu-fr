import React, { useState, useEffect } from "react";
// import "react-animated-slider/build/horizontal.css";
import Captions from "./SliderSteps";
import { Transition, Image, Grid, GridRow } from "semantic-ui-react";
import { relative } from "path";

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
const animation = ["slide right", "slide left"];
interface Props {
  slideCount: number;
}
const SliderComponentX: React.FunctionComponent<Props> = ({ slideCount }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anim, setAnim] = useState(1);
  const [rightanim, rightLeftAnim] = useState(0);
  const count = 4; // slideCount;
  const handleCaptionClick = (index: string) => {
    // console.log(activeIndex)
    console.log();
    setActiveIndex(parseInt(index));
    // setVisible(!visible);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // setAnim(1-anim)
      setActiveIndex(count - 1 === activeIndex ? 0 : activeIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  const size = slides.length;
  return (
    <div>
      <div>
        <Transition.Group
          duration={1000}
          animation={
            "slide right"
          }
        >
          {"0" === activeIndex + "" && (
            <div className="textSlider" >
              {slides[0].description}
            </div>
          )}
        </Transition.Group>
        <Transition.Group
          duration={1000}
          animation={
            "slide right"
          }
        >
          {"1" === activeIndex + "" && (
            <div className="textSlider" >
              {slides[1].description}
            </div>
          )}
        </Transition.Group>

        <Transition.Group
          duration={1000}
          animation={
           "slide right"
          }
        >
          {"2" === activeIndex + "" && (
            <div className="textSlider">
              {slides[2].description}
            </div>
          )}
        </Transition.Group>

        {console.log(anim)}

        <Transition.Group
          duration={1000}
          animation={
           "slide right"
          }
        >
          {"3" === activeIndex + "" && (
            <div className="textSlider" >
              {slides[3].description}
            </div>
          )}
        </Transition.Group>
      </div>
      <div className="captions">
           <Captions
        size={size}
        step={activeIndex}
        handleCaptionClick={handleCaptionClick}
      />
      </div>
     
    </div>
  );
};

export default SliderComponentX;
