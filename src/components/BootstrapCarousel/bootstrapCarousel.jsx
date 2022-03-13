import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./bootstrapCarousel.css"

function BootstrapCarousel({ urls, onNext }) {
  return (
    <React.Fragment>
      <div className="photo_container" >
        <p className="examples_title">Imágenes de ejemplo:</p>
        <Carousel className="carousel_style">
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
      </div>
    </React.Fragment>
  );

}

export default BootstrapCarousel;


