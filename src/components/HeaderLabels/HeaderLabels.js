import React, { Component } from 'react';
import './HeaderLabels.css';

class HeaderLabels extends Component {
  render() {
    return (
      <section className="HeaderLabels" >
          <h2 className="badge">Badge</h2>
          <h2 className="name">Rocket Name</h2>
          <h2 className="type">Rocket Type</h2>
          <h2 className="date">Launch Date</h2>
          <h2 className="details">Details</h2>
          <h2 className="id">ID</h2>
          <h2 className="article">Article</h2>
      </section>
    );
  }
}

export default HeaderLabels;
