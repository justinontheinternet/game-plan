import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReleaseList } from '../actions/index';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchReleaseList();
  }

  renderReleaseList(game) {
    return (
      <div key={game.name}>
        {game.name}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.releaseList.map(this.renderReleaseList)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { releaseList: state.releaseList };
}

export default connect(mapStateToProps, { fetchReleaseList })(ReleaseList);