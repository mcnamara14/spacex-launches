import React, { Component } from 'react';
import './LaunchCard.css';
import articleLinkImg from './images/link.svg';

class LaunchCard extends Component {
  render() {
    const { badge, name, type, date, details, id, article } = this.props;
 
    return (
      <section className="LaunchCard" >
          <div className="badge"><img src={badge} alt="flight badge"/></div>
          <div className="name">{name}</div>
          <div className="type">{type}</div>
          <div className="date">{date}</div>
          <div className="details">{details}</div>
          <div className="id">{id}</div>
          <div className="article"><a href={article} target="_blank"><img src={articleLinkImg} alt="article link"/></a></div>
      </section>
    );
  }
}

export default LaunchCard;
