import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';
const moment = require('moment');
moment().format();

class LaunchCards extends Component {
  sortLaunches = (launches) => {
    const { dateSort } = this.props;
    let sorted;

    if (dateSort === true) {
      sorted = launches.sort(function(a, b) {
        return moment(b.date).format('X')-moment(a.date).format('X')
      });
    } else {
      sorted = launches.sort(function(a, b) {
        return moment(a.date).format('X')-moment(b.date).format('X')
      });
    }

    return sorted;

  }
  
  getLaunches = () => {
    const { launches, filteredLaunchIds } = this.props;

    if (filteredLaunchIds.length === 0 || filteredLaunchIds.length === launches.length) {
      const sortedLaunches = this.sortLaunches(launches);

      return sortedLaunches.map((launch, index) => <LaunchCard {...launch} key={index} />)
    } else {
       const filteredLaunches = filteredLaunchIds.reduce((filteredLaunches, filter) => {
          launches.forEach(launch => {
            if (launch.id === filter) filteredLaunches.push(launch)
          })

        return filteredLaunches;
        }, [])

        const sortedLaunches = this.sortLaunches(filteredLaunches);

        return sortedLaunches.map((launch, index) => <LaunchCard {...launch} key={index} />)
      }
  }

  render() {
    let launchCards;
    const { launches } = this.props;
    
    if (launches.length) launchCards = this.getLaunches();
   
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
  dateSort: state.dateSort
})

export default connect(mapStateToProps)(LaunchCards);
