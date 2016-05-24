import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/index';

class GameShow extends Component {
  componentWillMount() {
    this.props.fetchGame(this.props.params.resourceId);
    console.log("this.props is:", this.props);
  }

  render() {
    console.log("this.props is 2:", this.props);
    return (
      <p>games show</p>
    )
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps, { fetchGame } )(GameShow);