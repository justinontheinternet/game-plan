import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReleaseList } from '../actions/index';
import { Link } from 'react-router';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchReleaseList();
  }

  renderReleaseList(game) {
    let releaseDate = '';
    console.log(game);

    if (!game.original_release_date) {
      releaseDate = game.expected_release_year + '-' +
        game.expected_release_month + '-' +
        game.expected_release_day;
    } else {
      releaseDate = game.original_release_date;
    }


    return (
      <tr key={game.name}>
        <td>{game.name}</td>
        <td>{releaseDate}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h3 className="title">Upcoming Releases</h3>
        <table className="table table-hover">
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { releaseList: state.releaseList };
}

export default connect(mapStateToProps, { fetchReleaseList })(ReleaseList);