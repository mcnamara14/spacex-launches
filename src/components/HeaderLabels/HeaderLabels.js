import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderLabels.css';
import { toggleDateSort } from '../../actions/toggleDateSort';

class HeaderLabels extends Component {
  toggleSort = () => {
    this.props.toggleDateSort();
  }

  render() {
    return (
      <section className="HeaderLabels" >
          <h2 className="badge">Badge</h2>
          <h2 className="name">Rocket Name</h2>
          <h2 className="type">Rocket Type</h2>
          <h2 className="date" onClick={() => this.toggleSort()}>Launch Date</h2>
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
