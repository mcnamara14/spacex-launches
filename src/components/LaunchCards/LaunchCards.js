import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';
const moment = require('moment');
moment().format();

class LaunchCards extends Component {
  sortLaunches = () => {
    const { launches, dateSort } = this.props;
    let sorted;

    if (dateSort === true) {
      console.log('1')
      sorted = launches.sort(function(a, b) {
        return moment(b.date).format('X')-moment(a.date).format('X')
      });
    } else {
      console.log('2')
      sorted = launches.sort(function(a, b) {
        return moment(a.date).format('X')-moment(b.date).format('X')
      });
    }

    return sorted
  }
  
  getLaunches = () => {
    const { filteredLaunchIds } = this.props;
    const sortedLaunches = this.sortLaunches();

    if (filteredLaunchIds.length === 0 || filteredLaunchIds.length === sortedLaunches.length) {
      return sortedLaunches.map((launch, index) => <LaunchCard {...launch} key={index} />)
    } else {
       return filteredLaunchIds.reduce((filteredLaunches, filter) => {
          sortedLaunches.forEach(launch => {
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
  dateSort: state.dateSort
})

export default connect(mapStateToProps)(LaunchCards);
