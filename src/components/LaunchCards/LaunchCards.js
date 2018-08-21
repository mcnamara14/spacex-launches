import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';

class LaunchCards extends Component {
  shouldComponentUpdate(prevProps) {
    return this.props.filteredLaunches.length !== prevProps.filteredLaunches.length
  }

  getLaunches = () => {
    let filtered;
    const { launches, filteredLaunches } = this.props;
    if (filteredLaunches.length === launches.length) {
      return launches.map(launch => <LaunchCard {...launch} />)
    } else {
       return filteredLaunches.reduce((filteredLaunches, filter) => {
          launches.forEach(launch => {
 
            launch.id === filter ? filteredLaunches.push(<LaunchCard {...launch} />) : null;
          })
          return filteredLaunches;
        }, [])
      }
  }

  render() {
    let launchCards;

    const { launches } = this.props;

    launches.length ? launchCards = this.getLaunches() : null;

    return (
      <section className="LaunchCards" >
        {launchCards}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  launches: state.launches,
  filteredLaunches: state.launches,
  landSuccess: state.landSuccess,
  reddit: state.reddit, 
  reused: state.reused
})

export default connect(mapStateToProps)(LaunchCards);
