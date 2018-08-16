import React, { Component } from 'react';
import './LaunchCard.css';
import placeholderImg from './images/placeholder.png';

class LaunchCard extends Component {
  render() {
    return (
      <section className="LaunchCard" >
          <div className="badge"><img src={placeholderImg} /></div>
          <div className="name">Name</div>
          <div className="type">Type</div>
          <div className="date">Date</div>
          <div className="details">Details</div>
          <div className="id">ID</div>
          <div className="article">Article</div>
      </section>
    );
  }
}

export default LaunchCard;
