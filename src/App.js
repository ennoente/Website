import React, { Component } from 'react';
import './App.css';
import profilePic from './img/Thoma Profilbild.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <img src={profilePic} />
        </div>
      </div>
    );
  }
}

export default App;