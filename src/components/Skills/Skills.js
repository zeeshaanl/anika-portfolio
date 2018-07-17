import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Row, Col } from 'react-bootstrap'
import FlagIcon from 'react-flag-kit/lib/FlagIcon';

import avidLogo from '../../assets/avidLogo.svg'
import prLogo from '../../assets/premierpro.svg'
import aeLogo from '../../assets/ae.svg'

import photoshopLogo from '../../assets/photoshop.svg'
import illustratorLogo from '../../assets/illustrator.svg'
import lightroomLogo from '../../assets/lightroom.svg'

import './Skills.css'

const Skills = () =>
    <div id='skills'>
        <SectionTitle title='Skills' />
        <Col className='c-skills__section' mdOffset={1} sm={12} md={3}>
            <Row>
                Lots of master's degress.<br />
                Lifts like a beast.
                Knows how to make a movie from scratch.
                Experience with storyboards
            </Row>
        </Col>
        <Col className='c-skills__section' sm={12} md={8}>
            <Row>
                <div className='c-skills__list'>
                    <div><img className='c-logo' src={photoshopLogo} /></div>
                    <div><img className='c-logo' src={illustratorLogo} /></div>
                    <div><img className='c-logo' src={aeLogo} /></div>
                </div>
                <div className='c-skills__list'>
                    <div><img className='c-logo' src={avidLogo} /></div>
                    <div><img className='c-logo' src={prLogo} /></div>
                    {/*<div><img className='c-logo' src={lightroomLogo} /></div>*/}
                </div>
                <div className='c-skills__list'>
                    <div><FlagIcon size={36} code="GB" /> <span className='c-language-text'>English</span></div>
                    <div><FlagIcon size={36} code="DE" /> <span className='c-language-text'>German</span></div>
                    <div><FlagIcon size={36} code="PL" /> <span className='c-language-text'>Polish</span></div>
                </div>
            </Row>
        </Col>
    </div>;

Skills.propTypes = {};
Skills.defaultProps = {};

export default Skills;
