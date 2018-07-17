import React, { Fragment } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutInfographic from '../AboutInfographic/AboutInfographic';
import PropTypes from 'prop-types';

import eagerLearner from '../../assets/eagerLearner.png';
import restlessTraveler from '../../assets/restlessTraveler.png';
import bookworm from '../../assets/bookworm.png';
import filmAddict from '../../assets/filmAddict.png';
import fitnessFreak from '../../assets/fitnessFreak.jpg';
import amateurPainter from '../../assets/amateurPainter.png';

import './AboutMe.css'

const AboutMe = (props) =>
    <div id='about' className='c-about-me'>
        <SectionTitle title='About Me' />
        <p className='c-about-me__text'>
            I'm Anika :) I live in Hamburg and I love movies and Zeeshaan.
        </p>
        <div className='c-infographic-container'>
            <AboutInfographic url={eagerLearner} text='Eager Learner' />
            <AboutInfographic url={restlessTraveler} text='Restless Traveller' />
            <AboutInfographic url={bookworm} text='Bookworm' />
        </div>
        <div className='c-infographic-container'>

            <AboutInfographic url={filmAddict} text='Film Addict' />
            <AboutInfographic url={fitnessFreak} text='Fitness Freak' />
            <AboutInfographic url={amateurPainter} text='Amateur Painter' />
        </div>
    </div>;

AboutMe.propTypes = {};
AboutMe.defaultProps = {};

export default AboutMe;
