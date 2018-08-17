import React, { Component } from 'react';
import './Header.css';
import HeaderFilters from '../HeaderFilters/HeaderFilters';
import HeaderLabels from '../HeaderLabels/HeaderLabels';

class Header extends Component {
  render() {
    return (
      <section className="Header" >
          <h1>SpaceX Launches</h1>
          <HeaderFilters />
          <HeaderLabels />
      </section>
    );
  }
}

export default Header;
