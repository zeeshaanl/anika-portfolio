import React, { Component } from 'react';
import AboveFold from '../AboveFold/AboveFold.js';
import Skills from '../Skills/Skills.js';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AboveFold />
                <Skills />
            </div>
        );
    }
}

export default App;
