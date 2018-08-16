import React, { Component } from 'react';
import './App.css';
import spaceBgImg from './images/background.jpg';

class App extends Component {
  render() {
    const bgImg = {backgroundImage: "url(" + spaceBgImg + ")"};

    return (
      <section className="App" style={bgImg}>
        <main>
          <h1>SpaceX Launches</h1>
        </main>
      </section>
    );
  }
}

export default App;
