import React, { Fragment } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutInfographic from '../AboutInfographic/AboutInfographic';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap'

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
        <Col xsOffset={1} xs={10}>
            <Row className='c-about-me__text'>
                <p>I'm a highly motivated and energetic person, not afraid of trying new things.</p>
                <p>I taught English in Taiwan, organised Language Speaking Club in Russia, finished apprenticeship in Polish Embassy
                    in Sweden and worked as an Account Manager in Germany.
                </p>
                <p>Now I'm changing my carrier to start doing what I love the most - filmmaking.
                    I'm fascinated with every single step of it - pre-production, production and post-production.
                </p>
                <p>Other than that I'm a....</p>
            </Row>
            <Row className='c-infographic-container'>
                <AboutInfographic url={eagerLearner} text='Eager Learner' />
                <AboutInfographic url={restlessTraveler} text='Restless Traveller' />
                <AboutInfographic url={bookworm} text='Bookworm' />
            </Row>
            <Row className='c-infographic-container'>

                <AboutInfographic url={filmAddict} text='Film Addict' />
                <AboutInfographic url={fitnessFreak} text='Fitness Freak' />
                <AboutInfographic url={amateurPainter} text='Amateur Painter' />
            </Row>
        </Col>
    </div>;

AboutMe.propTypes = {};
AboutMe.defaultProps = {};

export default AboutMe;
