import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
// import "react-animated-slider/build/horizontal.css";
import Captions from "./SliderSteps";
import {
  Transition,
  Image,
  Grid,
  GridRow,
  GridColumn,
  Icon,
} from "semantic-ui-react";
import { relative } from "path";
// import Carousel from "semantic-ui-carousel-react";
// import "semantic-ui-css/semantic.min.css";
let elements = [
  {
    render: () => {
      return (
        <div className="textSlider">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
      );
    },
  },
  {
    render: () => {
      return (
        <div className="textSlider">
          incididunt ut labore et dolore magna aliqua
        </div>
      );
    },
  },
  {
    render: () => {
      return (
        <div className="textSlider">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur
        </div>
      );
    },
  },
  {
    render: () => {
      return (
        <div className="textSlider">
          Duis aute irure dolor in reprehenderit in
        </div>
      );
    },
  },
];
const slides = [
  {
    title: "First item",
    description: () => (
      <div className="textSlider">
      Lorem ipsum dolor sit amet, consectetur adipiscin
      </div>
    ),
  },
  {
    title: "Second item",
    description: () => (
      <div className="textSlider">
      incididunt ut labore et dolore magna aliqu
      </div>
    ),
  },
  {
    title: "Third item",
    description: () => (
      <div className="textSlider">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur
      </div>
    ),
  },
  {
    title: "Fourth item",
    description: () => (
      <div className="textSlider">
        Duis aute irure dolor in reprehenderit i
      </div>
    ),
  },
];

const SliderComponentX: React.FunctionComponent = () => {
  const id = 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const count = slides.length;
  const animation = ["slide left", "slide right"];
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

  // next function
  const next = () => {
    setActiveIndex((activeIndex + 1) % count);
  };
  // previous function
  const previous = () => {
    setActiveIndex(
      (activeIndex - 1) % count < 0 ? count - 1 : (activeIndex - 1) % count
    );
  };
  return (
    <>
      <Grid columns={4} centered>
        <Grid.Row verticalAlign="middle">
          <Grid.Column className="arrow-icon" width="2">
            <Icon
              name="angle left"
              style={{ fontSize: "35px" }}
              onClick={() => previous()}
            />
          </Grid.Column>
          <Grid.Column width="10" style={{ textAlign: "center" }}>
            <div className="slidesContainer">
              {slides.map((element, index) => {
                if (activeIndex === index) {
                  return (
                    <Transition
                      key={uniqid()}
                      visible={true}
                      duration={1000}
                      animation={animation[1 - id]}
                    >
                      {slides[index].description()}
                    </Transition>
                  );
                }
              })}
            </div>
          </Grid.Column>
          <Grid.Column className="arrow-icon" width="2">
            <Icon
              name="angle right"
              style={{ fontSize: "35px" }}
              onClick={() => next()}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <div className="captions">
            <Captions
              size={count}
              step={activeIndex}
              handleCaptionClick={handleCaptionClick}
            />
          </div>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SliderComponentX;
