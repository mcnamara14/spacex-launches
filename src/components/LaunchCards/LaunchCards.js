import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LaunchCards.css';
import LaunchCard from '../LaunchCard/LaunchCard';

class LaunchCards extends Component {
  render() {
    let launchCards;

    if (this.props.launches.length) {
        launchCards = this.props.launches.map(launch => {

        return <LaunchCard {...launch} />
      })
    }


    return (
      <section className="LaunchCards" >
        {launchCards}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  launches: state.launches
})

export default connect(mapStateToProps)(LaunchCards);
