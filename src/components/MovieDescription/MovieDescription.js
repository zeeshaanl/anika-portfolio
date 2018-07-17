import React from 'react';
import PropTypes from 'prop-types';

import './MovieDescription.css'

const MovieDescription = () =>
    <div className='c-movie-desc'>
        <p>
            <div className='c-movie-desc__title'>Ask Me</div>
            An innocent game takes an unexpected turn.
        </p>
        <p>
            Starring:<br />
            Livia Coyle as Alice<br />
            Martin Gardavsky as Nick<br />
        </p>
        <p>
            Director & Writer: Anika Kowalska<br />
            Edited in AVID by Anika Kowalska<br />
        </p>
        <p>
            Shot at Prague Film School, part of the summer workshop 2018.
        </p>
    </div>;

MovieDescription.propTypes = {};
MovieDescription.defaultProps = {};

export default MovieDescription;
