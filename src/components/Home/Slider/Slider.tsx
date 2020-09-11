import React, { useState, useEffect } from "react";
// import "react-animated-slider/build/horizontal.css";
import Captions from "./SliderSteps";
import { Transition, Image, Grid, GridRow } from "semantic-ui-react";
import { relative } from "path";
// import Carousel from "semantic-ui-carousel-react";
// import "semantic-ui-css/semantic.min.css";
let elements = [
  {
    render: () => {
      return (
        <div className="textSlider">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
      );
    },
  },
  {
    render: () => {
      return (
        <div className="textSlider">incididunt ut labore et dolore magna aliqua</div>
      );
    },
  },
  {
    render: () => {
      return (
        <div className="textSlider">Praesent commodo cursus magna, vel scelerisque nisl consectetur</div>
      );
    },
  },
  {
    render: () => {
      return (
        <div className="textSlider">Duis aute irure dolor in reprehenderit in</div>
      );
    },
  },
 
];
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
  const count = 4; // slideCount;
  const animation = "slide left"
  const handleCaptionClick = (index: string) => {
    // console.log(activeIndex)
    setActiveIndex(parseInt(index));
    // setVisible(!visible);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // setAnim(1-anim)
      setActiveIndex(count - 1 === activeIndex ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  const size = slides.length;
  return (
    <>
      <div className="slidesContainer">
        <Transition.Group duration={1000} transitionOnMount={true} directional animation={animation}>
          {"0" === activeIndex + "" && (
            <div className="textSlider">{slides[0].description}</div>
          )}
        </Transition.Group>
        <Transition.Group duration={1000} transitionOnMount={true} directional animation={animation}>
          {"1" === activeIndex + "" && (
            <div className="textSlider">{slides[1].description}</div>
          )}
        </Transition.Group>

        <Transition.Group duration={1000} transitionOnMount={true} directional animation={animation}>
          {"2" === activeIndex + "" && (
            <div className="textSlider">{slides[2].description}</div>
          )}
        </Transition.Group>

        <Transition.Group duration={1000} transitionOnMount={true} directional  animation={animation}>
          {"3" === activeIndex + "" && (
            <div className="textSlider">{slides[3].description}</div>
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

    </>
  );

  // return (
  //   <div style={{ width: 500, height: 300}}>
  //     {/* <Carousel
  //       elements={elements}
  //       duration={4000}
  //       animation="slide right"
  //       showNextPrev={false}
  //       showIndicators={true}
  //     /> */}
  //   </div>
  // );
};

export default SliderComponentX;
