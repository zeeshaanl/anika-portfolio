import React from 'react';
import PropTypes from 'prop-types';

import './AboutInfographic.css'

const AboutInfographic = ({url, text}) =>
    <div className='c-infographic'>
        <div><img className='c-infographic__image' src={url} /></div>
        <div className='c-infographic__text'>{text}</div>
    </div>;

AboutInfographic.propTypes = {};
AboutInfographic.defaultProps = {};

export default AboutInfographic;
