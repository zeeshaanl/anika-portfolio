import React, { Component } from 'react';
import { Element } from 'react-scroll'

import AboveFold from '../AboveFold/AboveFold.js';
import Skills from '../Skills/Skills.js';

import './App.css';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Element name='film'>
                    <section>
                        <AboveFold />
                        <div className='clearfix' />
                    </section>
                </Element>

                <Element name='skills'>
                    <section>
                        <Skills />
                        <div className='clearfix' />
                    </section>
                </Element>

                <Element name='about'>
                    <section>
                        <AboutMe />
                        <div className='clearfix' />
                    </section>
                </Element>

                <Element name='contact'>
                    <section>
                        <ContactMe />
                        <div className='clearfix' />
                    </section>
                </Element>
            </div>
        );
    }
}

export default App;
