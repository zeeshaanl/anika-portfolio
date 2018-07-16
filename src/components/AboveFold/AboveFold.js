import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js'
import VideoPlayer from '../VideoPlayer/VideoPlayer.js'
import MovieDescription from '../MovieDescription/MovieDescription.js'
import { Row, Col } from 'react-bootstrap'


const AboveFold = () =>
    <Fragment>
        <Header className='c-header-container' />
        <Col sm={12} md={8}>
            <Row className='c-video-container'>
                <VideoPlayer />
            </Row>
        </Col>
        <Col sm={12} md={4}>
            <Row className='c-desc-container'>
                <MovieDescription />
            </Row>
        </Col>
    </Fragment>;

AboveFold.propTypes = {};
AboveFold.defaultProps = {};

export default AboveFold;
