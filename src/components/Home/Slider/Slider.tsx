import React, { useState, useEffect } from "react";
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
  const animation = "slide left";
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
      <Grid columns={3} verticalAlign='middle' >
        <GridColumn width="1" >
          <Icon name="angle left" style={{ position: "absolute" }} />
        </GridColumn>
        <GridColumn width="16">
          <div className="slidesContainer">
            {slides.map((element, index) => {
              return (
                <Transition.Group
                  key={index}
                  duration={1000}
                  animation={animation}
                >
                  {index === activeIndex && (
                    <div className="textSlider">{element.description}</div>
                  )}
                </Transition.Group>
              );
            })}
          </div>
        </GridColumn>
        <GridColumn width="1">
          <Icon name="angle left" style={{ position: "absolute" }} />
        </GridColumn>
      </Grid>

      <div className="captions">
        <Captions
          size={size}
          step={activeIndex}
          handleCaptionClick={handleCaptionClick}
        />
      </div>
    </>
  );
};

export default SliderComponentX;
