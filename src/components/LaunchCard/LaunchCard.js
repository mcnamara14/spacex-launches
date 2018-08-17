import React, { Component } from 'react';
import './LaunchCard.css';
import placeholderImg from './images/placeholder.png';
import articleLinkImg from './images/link.svg';

class LaunchCard extends Component {
  render() {
    const { badge } = this.props;

    return (
      <section className="LaunchCard" >
          <div className="badge"><img src={badge} /></div>
          <div className="name">Name</div>
          <div className="type">Type</div>
          <div className="date">Date</div>
          <div className="details">Details</div>
          <div className="id">ID</div>
          <div className="article"><img src={articleLinkImg} /></div>
      </section>
    );
  }
}

export default LaunchCard;
