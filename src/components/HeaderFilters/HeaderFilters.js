import React, { Component } from 'react';
import './HeaderFilters.css';
import refreshIcon from './images/refresh.svg';

class HeaderFilters extends Component {
  render() {
    return (
      <section className="HeaderFilters" >
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
    );
  }
}

export default HeaderFilters;
