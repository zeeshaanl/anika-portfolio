import React from "react";
import PropTypes from "prop-types";

import "./CarouselCard.css";

const CarouselCard = (props) =>
  (
    <div className='c-carousel-card'>
      <div className='c-carousel-card__media'>
        {props.media}
      </div>
      <div className='c-carousel-card__description'>
        {props.description}
      </div>
    </div>
  );

CarouselCard.propTypes = {
  media: PropTypes.element,
  description: PropTypes.element,
};
export default CarouselCard;