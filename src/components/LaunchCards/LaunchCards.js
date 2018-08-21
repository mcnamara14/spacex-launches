import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';

class LaunchCards extends Component {
  getFilters = () => {
    const { landSuccess, reused, reddit } = this.props;

    const filters = []

    landSuccess ? filters.push('landSuccess') : null;
    reused ? filters.push('reused') : null;
    reddit ? filters.push('reddit') : null;

    return filters;
  }

  filterLaunches = () => {
    let filtered
    const { launches } = this.props;
    const filters = this.getFilters();
    const filterLength = filters.length;

    if (filterLength=== 0) {
      filtered = launches.map(launch => {

      return <LaunchCard {...launch} />
      })
      return filtered
    } else {
      const filtered = launches.reduce((filteredLaunches, launch) => {
        let trueFilters = null;
    
        for (let i = 0; i < filterLength; i++) {
          launch[filters[i]] ? trueFilters++ : null;
        }
        
        trueFilters === filters.length ? filteredLaunches.push(<LaunchCard {...launch} />) : null;
  
        return filteredLaunches;
      }, [])
    
      return filtered;
    }
  
  }

  render() {
    let launchCards;

    const { launches } = this.props;

    launches.length ? launchCards = this.filterLaunches() : null;

    return (
      <section className="LaunchCards" >
        {launchCards}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  launches: state.launches,
  landSuccess: state.landSuccess,
  reddit: state.reddit, 
  reused: state.reused
})

export default connect(mapStateToProps)(LaunchCards);
