import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js'
import VideoPlayer from '../VideoPlayer/VideoPlayer.js'
import MovieDescription from '../MovieDescription/MovieDescription.js'
import { Row, Col, Grid } from 'react-bootstrap'

const AboveFold = () =>
    <Fragment>
        <Header className='c-header-container' />
        <Grid>
            <Row>
                <Col mdOffset={1} sm={12} md={7}>
                    <Row className='c-video-container'>
                        <VideoPlayer />
                    </Row>
                </Col>
                <Col sm={12} md={3}>
                    <Row className='c-desc-container'>
                        <MovieDescription />
                    </Row>
                </Col>
            </Row>
        </Grid>
    </Fragment>;

AboveFold.propTypes = {};
AboveFold.defaultProps = {};

export default AboveFold;
