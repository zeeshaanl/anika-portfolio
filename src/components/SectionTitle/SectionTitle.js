import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.css'

const SectionTitle = ({ title }) =>
    <h1 className='c-section-title'>{title}</h1>;

SectionTitle.propTypes = {};
SectionTitle.defaultProps = {};

export default SectionTitle;
