import React from "react";
import Carousel from "react-bootstrap/Carousel";

function BootstrapCarousel({ urls, onNext }) {
  return (
    <Carousel>
      {urls.map((url, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              onClick={onNext}
              onMouseEnter={onNext}
              className="d-block w-100"
              src={url}
              alt="First slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default BootstrapCarousel;
