import React from 'react';
import PropTypes from 'prop-types';

import './MovieDescription.css'

const MovieDescription = () =>
        <div className='c-movie-desc'>
            <p>Ask Me <br />An innocent game takes an unexpected turn.</p>
            <p>Written and Directed by Anika Kowalska at Prague Film School</p>
        </div>;

MovieDescription.propTypes = {};
MovieDescription.defaultProps = {};

export default MovieDescription;
