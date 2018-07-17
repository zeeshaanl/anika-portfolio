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
        <SectionTitle className='u-skills-header' title='Skills' />
        <Col className='c-skills__desc' xsOffset={1} sm={10} md={4}>
            <Row>
                <p>I'm a constant explorer of Adobe's programs.</p>
                <p>I'm a master in getting master degrees (two of them already - International Relations and Far East Culture).</p>
                <p>I have a flair for storyboarding.</p>
                <p>Am I missing a technical skill? Just give me some time and I'll nail it.</p>
            </Row>
        </Col>
        <Col className='c-skills__section' xsOffset={1} sm={10} md={6}>
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
