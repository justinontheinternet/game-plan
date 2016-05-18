import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReleaseList } from '../actions/index';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchReleaseList();
  }

  render() {
    return (
      <div>
        ReleaseList
      </div>
    );
  }
}

function mapStateToProps(state) {
  upcoming: state;
}

export default connect(null, { fetchReleaseList })(ReleaseList);