import React from "react";
import PropTypes from "prop-types";

import "./CarouselImage.css";

const CarouselImage = ({ src }) => {
  return <div className="c-carousel-image-container">
    <img className="c-carousel-image" src={src} />
  </div>;
};

CarouselImage.propTypes = {
  src: PropTypes.string,
};
CarouselImage.defaultProps = {};

export default CarouselImage;
