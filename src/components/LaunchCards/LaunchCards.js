import React, { Component } from 'react';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';

class LaunchCards extends Component {
  render() {
    return (
      <section className="LaunchCards" >
        <LaunchCard />
      </section>
    );
  }
}

export default LaunchCards;
