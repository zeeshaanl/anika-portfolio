import React, { Component } from 'react';
import AboveFold from '../AboveFold/AboveFold.js';
import Skills from '../Skills/Skills.js';

import './App.css';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';

class App extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <AboveFold />
                    <div className='clearfix' />
                </section>
                <section>
                    <Skills />
                    <div className='clearfix' />
                </section>

                <section>
                    <AboutMe />
                    <div className='clearfix' />
                </section>

                <section>
                    <ContactMe />
                    <div className='clearfix' />
                </section>
            </div>
        );
    }
}

export default App;
