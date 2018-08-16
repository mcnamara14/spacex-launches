import React, { Component } from 'react';
import './HeaderLabels.css';

class HeaderLabels extends Component {
  render() {
    return (
      <section className="HeaderLabels" >
        <div className="labelsLeft">
          <h2 className="badge">Badge</h2>
          <h2 className="rocketName">Rocket Name</h2>
          <h2 className="rocketType">Rocket Type</h2>
          <h2 className="launchDate">Launch Date</h2>
          <h2 className="details">Details</h2>
        </div>
        <div className="labelsRight">
          <h2 className="id">ID</h2>
          <h2 className="article">Article</h2>
        </div>
      </section>
    );
  }
}

export default HeaderLabels;
