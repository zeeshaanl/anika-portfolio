import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Row, Col } from 'react-bootstrap'

const Skills = () =>
    <Fragment>
        <SectionTitle title='Skills' />
        <Col sm={12} md={4}>
            <Row>
                Lots of master's degress.<br />
                Lifts like a beast.
            </Row>
        </Col>
        <Col sm={12} md={8}>
            <Row>
                Icons
            </Row>
        </Col>
    </Fragment>;

Skills.propTypes = {};
Skills.defaultProps = {};

export default Skills;
