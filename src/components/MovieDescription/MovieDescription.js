import React from "react";
import PropTypes from "prop-types";

import "./MovieDescription.css";

const MovieDescription = (props) => {
  const { title, subTitle, duration } = props;
  return (<div className='c-movie-desc'>
    <h3 className='c-movie-desc__title'>{title}</h3>

    <div className='c-movie-desc__sub-title'>
      <hr />
      <h4>{subTitle}</h4>
      <hr />
    </div>

    {!!duration && <div className='c-movie-desc__duration'>
      <h4>{duration}</h4>
    </div>
    }
    {props.children}
  </div>);
};


MovieDescription.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  duration: PropTypes.string,
};

export default MovieDescription;
