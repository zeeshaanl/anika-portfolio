import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.css'

const SectionTitle = ({ title, className='' }) => {
    const classNames = `c-section-title ${className}`;

    return <h1 className={classNames}>{title}</h1>;
};

SectionTitle.propTypes = {};
SectionTitle.defaultProps = {};

export default SectionTitle;
