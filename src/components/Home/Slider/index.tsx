import React from "react";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import { Icon } from "semantic-ui-react";
import SliderComponentX from "./Slider";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
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
const SliderComponent: React.FunctionComponent = () => {
  return (
    <div>
      {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        playDirection="forward"
        infinite
        interval={100}
      >
        <Slider>
          {slides.map((slide, index) => (
            <Slide index={index}>
              <div className="textSlider">{slide.description}</div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider> */}
      

      <SliderComponentX slideCount={4}/>
      
      {/* <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2" className=""></li>
    </ol> */}
    </div>
  );
};

export default SliderComponent;
