import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReleaseList } from '../actions/index';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchReleaseList();
  }

  renderReleaseList(game) {
    console.log("game is", game);
    return (
      <tr key={game.name}>
        <td>{game.name}</td>
        <td>{game.original_release_date}</td>
      </tr>
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.releaseList.map(this.renderReleaseList)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { releaseList: state.releaseList };
}

export default connect(mapStateToProps, { fetchReleaseList })(ReleaseList);