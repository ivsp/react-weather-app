import "./bootstrapCarousel.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../../context/data-context";
import { useContext } from "react";

function BootstrapCarousel() {
  const [, , , , , , , , , , , , urlImages, , , ,] = useContext(DataContext);
  console.log(typeof urlImages);
  return (
    <React.Fragment>
      <div className="photo_container">
        <p className="examples_title">Imágenes de ejemplo:</p>
        <Carousel className="carousel_style">
          {urlImages.map((url, i) => {
            return (
              <Carousel.Item key={i}>
                <img className="d-block w-100" src={url} alt="First slide" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default BootstrapCarousel;
