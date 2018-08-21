import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderLabels.css';
import { toggleDateSort } from '../../actions/toggleDateSort';

class HeaderLabels extends Component {
  constructor() {
    super()

    this.state = {
      sort: false
    }
  }

  handleClick = () => {
    this.props.toggleDateSort();

    if (!this.state.sort) {
      this.setState({sort: true})
    } else {
      this.setState({sort: false})
    }
  }

  render() {
    let dateClass;

    this.state.sort ? dateClass = 'date asc' : dateClass = 'date desc';

    return (
      <section className="HeaderLabels" >
          <h2 className="badge">Badge</h2>
          <h2 className="name">Rocket Name</h2>
          <h2 className="type">Rocket Type</h2>
          <h2 className={dateClass} onClick={() => this.handleClick()}>Launch Date</h2>
          <h2 className="details">Details</h2>
          <h2 className="id">ID</h2>
          <h2 className="article">Article</h2>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDateSort: () => dispatch(toggleDateSort())
})

export default connect(null, mapDispatchToProps)(HeaderLabels);
