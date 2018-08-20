import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderFilters.css';
import refreshIcon from './images/refresh.svg';
import { storeLandSuccess } from '../../actions/storeLandSuccess';
import { storeReused } from '../../actions/storeReused';
import { storeReddit } from '../../actions/storeReddit';

class HeaderFilters extends Component {
  toggleLandSuccessFilter = (event) => {
    this.props.landSuccess ? this.props.storeLandSuccess(false) : this.props.storeLandSuccess(true);
  }

  toggleReusedFilter = (event) => {
    this.props.reused ? this.props.storeReused(false) : this.props.storeReused(true);
  }

  toggleRedditFilter = (event) => {
    this.props.reddit ? this.props.storeReddit(false) : this.props.storeReddit(true);
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
  filters: state.filters,
  landSuccess: state.landSuccess,
  reused: state.reused,
  reddit: state.reddit
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilters);
