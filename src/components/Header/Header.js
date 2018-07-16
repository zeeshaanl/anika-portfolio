import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

import anikaPic from '../../assets/anika.jpg';
import './Header.css'

const Header = ({ className }) => {
    const classNames = `c-header container-fluid ${className}`;
    return <Fragment>
        <Navbar className={classNames} fluid inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <div className='c-logo-container'>
                        <img className='c-profile-logo' src={anikaPic} />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Latest Film
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Skills
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        About Me
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Fragment>
}

export default Header;