import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


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
    title: "Third item ",
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
      <Carousel style={{ padding: "40px", height: "350px" }} controls={true}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="textSlider">{slide.description}</div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
