import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import LaunchCards from '../LaunchCards/LaunchCards';
import spaceBgImg from './images/background.jpg';

class App extends Component {
  render() {
    const bgImg = {backgroundImage: "url(" + spaceBgImg + ")"};

    return (
      <section className="App" style={bgImg}>
        <main>
          <Header />
          <LaunchCards />
        </main>
      </section>
    );
  }
}

export default App;
