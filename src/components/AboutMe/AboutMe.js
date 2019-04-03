import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutInfographic from '../AboutInfographic/AboutInfographic';
import { Row, Col } from 'react-bootstrap'

import eagerLearner from '../../assets/eagerLearner.svg';
import restlessTraveler from '../../assets/restlessTraveler.svg';
import bookworm from '../../assets/bookworm.svg';
import filmAddict from '../../assets/filmAddict.svg';
import fitnessFreak from '../../assets/fitnessFreak.svg';
import amateurPainter from '../../assets/amateurPainter.svg';

import './AboutMe.css'

const AboutMe = () =>
    <div id='about' className='c-about-me'>
        <SectionTitle title='About Me' />
        <Col xsOffset={1} xs={10}>
            <Row className='c-about-me__text'>
                <p>I'm a highly motivated and energetic person, not afraid of trying new things.</p>
                <p>I taught English in Taiwan, organised Language Speaking Club in Russia, finished apprenticeship in Polish Embassy
                    in Sweden and worked as an Account Manager in Germany.
                </p>
                <p>Now I'm on a career path that leads me through the creative fields of motion graphic design, UI/UX and filmmaking.
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
