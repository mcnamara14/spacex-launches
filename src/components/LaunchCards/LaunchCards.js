import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';

class LaunchCards extends Component {
  getLaunches = () => {
    const { launches, filteredLaunchIds } = this.props;
  
    if (filteredLaunchIds.length === 0 || filteredLaunchIds.length === launches.length) {
      return launches.map((launch, index) => <LaunchCard {...launch} key={index} />)
    } else {
       return filteredLaunchIds.reduce((filteredLaunches, filter) => {
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
  filteredLaunchIds: state.filteredLaunchIds,
  landSuccess: state.landSuccess,
  reddit: state.reddit, 
  reused: state.reused
})

export default connect(mapStateToProps)(LaunchCards);
