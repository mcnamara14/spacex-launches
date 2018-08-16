import React, { Component } from 'react';
import './Header.css';
import refreshIcon from './images/refresh.svg';

class Header extends Component {
  render() {
    return (
      <section className="Header" >
          <h1>SpaceX Launches</h1>
          <section className="headerFilters">
            <div className="refreshIcon"><img src={refreshIcon} /></div>
            <div className="checkboxes">
              <label class="container landSuccess">LAND SUCCESS
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="container reused">REUSED
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="container withReddit">WITH REDDIT
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </section>
      </section>
    );
  }
}

export default Header;
