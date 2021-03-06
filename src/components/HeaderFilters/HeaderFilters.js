import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderFilters.css';
import refreshIcon from './images/refresh.svg';
import { storeFilteredLaunchIds } from '../../actions/storeFilteredLaunchIds';
import { clearFilteredLaunchIds } from '../../actions/clearFilteredLaunchIds';

export class HeaderFilters extends Component {
  constructor() {
    super()

    this.state = {
      filters: []
    }
  }

  toggleFilter = (filter) => {
    if (!this.state.filters.includes(filter)) {
      this.setState({
        filters: [...this.state.filters, filter]
      }, () => this.filterLaunches())
    } else {
      const index = this.state.filters.indexOf(filter);

      this.setState(prevState => { 
        let updatedFilters = prevState.filters
        updatedFilters.splice(index, 1)
        return {filters: updatedFilters};
      }, () => this.filterLaunches())
    }
  }

  filterLaunches = () => {
    const { launches } = this.props;
    const { filters } = this.state;

    this.props.clearFilteredLaunchIds();

    if (filters.length === 0) {
      launches.forEach(launch => this.props.storeFilteredLaunchIds(launch.id))
    } else {
      launches.forEach(launch => {
        let trueFilters = null;
    
        for (let i = 0; i < filters.length; i++) {
          if (launch[filters[i]] === true) trueFilters++
        }
        
        if (trueFilters === filters.length) this.props.storeFilteredLaunchIds(launch.id);
      })
    }
  }

  render() {
    return (
      <section className="HeaderFilters" >
            <div className="refreshIcon" onClick={() => this.props.fetchLaunches()}><img src={refreshIcon} alt="refresh icon"/></div>
            <div className="checkboxes">
              <label className="container landSuccess">LAND SUCCESS
                <input type="checkbox" />
                <span className="checkmark" onClick={() => this.toggleFilter('landSuccess')} ></span>
              </label>
              <label className="container reused">REUSED
                <input type="checkbox" />
                <span className="checkmark" onClick={() => this.toggleFilter('reused')}></span>
              </label>
              <label className="container withReddit">WITH REDDIT
                <input type="checkbox" />
                <span className="checkmark" onClick={() => this.toggleFilter('reddit')}></span>
              </label>
            </div>
      </section>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeFilteredLaunchIds: (id) => dispatch(storeFilteredLaunchIds(id)),
  clearFilteredLaunchIds: () => dispatch(clearFilteredLaunchIds())
});

export const mapStateToProps = (state) => ({
  launches: state.launches,
  filters: state.filters,
  landSuccess: state.landSuccess,
  reused: state.reused,
  reddit: state.reddit
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilters);
