import React, { Component } from 'react';
import './App.css';

import NavigationBar from './NavigationBar/NavigationBar';
import HamburgerBar from './NavigationBar/HamburgerBar';
import Content from './Content/Content';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavigationBar />

          <HamburgerBar />

          <Content />

          <SocialMediaBar />
      </div>
    );
  }
}

export default App;