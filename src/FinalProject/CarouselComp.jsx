import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import camel from './pictures/camel.jfif'
import gorilla from './pictures/gorilla.jfif'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export const CarouselComp = () => {
  const [index, setIndex] = useState(0);
  const images = useSelector(state => state.images);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ border: "100px #b281eb48", padding: "100px", background: "#b281eb48", borderRadius: "15px", margin: "10px" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img src={image.largeImageURL} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}

        {/* <Carousel.Item>
          <img className="camel" src={camel} alt="First slide" />
          <Carousel.Caption> <h3>First slide label</h3> </Carousel.Caption>
        </Carousel.Item> */}

      </Carousel>
    </div>
  );
}
export default CarouselComp;
