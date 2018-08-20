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
    let launchCards;
    const { launches } = this.props;
    const filters = this.getFilters();

    if (!filters.length) {
      launchCards = launches.map(launch => {

      return <LaunchCard {...launch} />
      })
    } else {
        launchCards = launches.reduce((launchesArray, launch) => {
          const filterLaunch = filters.every(item => {
            return launch[item] === true;
          })

        filterLaunch ? launchesArray.push(<LaunchCard {...launch} />) : null;
  
        return launchesArray;
        }, []);
    }

    return launchCards
  }

  render() {
    let launchCards;

    const { reddit, reused, landSuccess, launches } = this.props;

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
