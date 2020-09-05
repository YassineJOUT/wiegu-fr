import React from "react";
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import { Icon } from "semantic-ui-react";
const slides = [
  { title: 'First item', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'},
  { title: 'Second item', description: 'incididunt ut labore et dolore magna aliqua'},
  { title: 'Third item', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'},
  { title: 'Fourth item', description: 'Duis aute irure dolor in reprehenderit in'}
];
const SliderComponent: React.FunctionComponent = () => {
  return (
    <div style={{height:'300px'}}>
      <Slider
        autoplay = {2000}
        infinite = {true}
        nextButton = {<Icon name='arrow circle right'  />}
        previousButton = {<Icon name='arrow circle left'  />}
      >
        {slides.map((slide, index) => <div key={index}>
          <div className="textSlider">{slide.description}</div>
        </div>)}
      </Slider>
    </div>


  );};

  export default SliderComponent;