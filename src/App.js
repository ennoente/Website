import React, {Component} from 'react';
import './App.css';

import NavigationBar from './NavigationBar/NavigationBar';
import HamburgerBar from './NavigationBar/HamburgerBar';
import Home from './ContentPages/Home/Home';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar';
import MyStory from './ContentPages/MyStory/MyStory';

/** Has to be imported after the components to keep media queries working */
import './ContentContainer.css';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavigationBar />

                    <HamburgerBar />

                    <Route exact path="/" component={Home} />
                    <Route path="/my-story" component={MyStory} />

                    <SocialMediaBar />
                </div>
            </Router>
        );
    }
}

export default App;