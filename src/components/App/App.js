import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import LaunchCards from '../LaunchCards/LaunchCards';
import spaceBgImg from './images/background.jpg';
import { storeLaunches } from '../../actions/storeLaunches';
const moment = require('moment');
moment().format();

class App extends Component {
  componentDidMount() {
    this.fetchLaunches();
  }

  fetchLaunches = async () => {
    const results = await fetch('https://api.spacexdata.com/v2/launches');
    const launches = await results.json();

    const cleanLaunchData = this.cleanLaunchData(launches);
    this.storeLaunches(cleanLaunchData);
  }

  cleanLaunchData = (data) => {
    let reddit;

    const cleanLaunches = data.map(launch => {
      const reused = Object.keys(launch.reuse).some(key => launch.reuse[key]);
      'reddit_campaign' in launch.links ? reddit = true : reddit = false;
      return ({
        badge: launch.links.mission_patch_small,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
        date: moment.utc(launch.launch_date_utc).format('MM/DD/YYYY'),
        details: launch.details,
        id: launch.flight_number,
        article: launch.links.article_link,
        landSuccess: launch.rocket.first_stage.cores[0].land_success || false,
        reused,
        reddit
      })
    })
  
    return cleanLaunches
  }

  storeLaunches = (launchData) => {
    launchData.forEach(launch => {
      const { badge, name, type, date, details, id, article, landSuccess, reused, reddit } = launch;

      this.props.storeLaunches(badge, name, type, date, details, id, article, landSuccess, reused, reddit)
    });
  }

  render() {
    const bgImg = {backgroundImage: "url(" + spaceBgImg + ")"};

    return (
      <section className="App" style={bgImg}>
        <main>
          <Header />
          <LaunchCards />
        </main>
      </section>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  storeLaunches: (
    badge, 
    name, 
    type, 
    date, 
    details,
    id, 
    article,
    landSuccess,
    reused,
    reddit
  ) => 
    dispatch(storeLaunches(
      badge, 
      name, 
      type, 
      date,
      details,
      id, 
      article,
      landSuccess,
      reused,
      reddit
    )
    ),
});

export default connect(null, mapDispatchToProps)(App);
