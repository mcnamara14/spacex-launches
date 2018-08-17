import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderFilters.css';
import refreshIcon from './images/refresh.svg';
import { storeLandSuccess } from '../../actions/storeLandSuccess';
import { storeReused } from '../../actions/storeReused';
import { storeReddit } from '../../actions/storeReddit';

class HeaderFilters extends Component {
  toggleLandSuccessFilter = (event) => {
    !this.props.filters.landSuccess ? this.props.storeLandSuccess(true) : this.props.storeLandSuccess(false);
  }

  toggleReusedFilter = (event) => {
    !this.props.filters.reused ? this.props.storeReused(true) : this.props.storeReused(false);
  }

  toggleRedditFilter = (event) => {
    !this.props.filters.reddit ? this.props.storeReddit(true) : this.props.storeReddit(false);
  }

  render() {
    return (
      <section className="HeaderFilters" >
            <div className="refreshIcon"><img src={refreshIcon} /></div>
            <div className="checkboxes">
              <label class="container landSuccess">LAND SUCCESS
                <input type="checkbox" />
                <span class="checkmark" onClick={() => this.toggleLandSuccessFilter()} ></span>
              </label>
              <label class="container reused">REUSED
                <input type="checkbox" />
                <span class="checkmark" onClick={() => this.toggleReusedFilter()}></span>
              </label>
              <label class="container withReddit">WITH REDDIT
                <input type="checkbox" />
                <span class="checkmark" onClick={() => this.toggleRedditFilter()}></span>
              </label>
            </div>
      </section>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeLandSuccess: (boolean) => dispatch(storeLandSuccess(boolean)),
  storeReused: (boolean) => dispatch(storeReused(boolean)),
  storeReddit: (boolean) => dispatch(storeReddit(boolean))
});

export const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilters);
