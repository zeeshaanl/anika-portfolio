import React from 'react';
import PropTypes from 'prop-types';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import SectionTitle from '../SectionTitle/SectionTitle';

import './ContactMe.css'

const ContactMe = (props) =>
    <div id='contact' className='c-contact'>
        <SectionTitle title='Contact Me' />
        <div className='c-contact__element-container'>
            <div className='c-contact__element' onClick={() => window.open('https://www.linkedin.com/in/anikakowalska/', '_blank')}>
                <FaLinkedin /> LinkedIn
            </div>
            <div className='c-contact__element' onClick={() => window.location.href = 'mailto:kowalska.anika@gmail.com'}>
                <FaEnvelope /> kowalska.anika@gmail.com
            </div>
        </div>
    </div>;
ContactMe.propTypes = {};
ContactMe.defaultProps = {};

export default ContactMe;
