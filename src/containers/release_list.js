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
    const gameURL = game.site_detail_url;
    const regex = /\d{4,}-\d{4,}/;
    const resourceId = gameURL.match(regex);

    if (!game.original_release_date) {
      releaseDate = game.expected_release_year + '-' +
        game.expected_release_month + '-' +
        game.expected_release_day;
    } else {
      releaseDate = game.original_release_date;
    }


    return (
      <Link to={"game/" + resourceId[0]} className="game-link" key={game.id}>
        <li className="list-group-item" key={game.name}>
          <span className="pull-xs-right">{releaseDate}</span>
          <strong>{game.name}</strong>
        </li>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <h3 className="title">Upcoming Releases</h3>
        <ul>
          {this.props.releaseList.map(this.renderReleaseList)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { releaseList: state.releaseList };
}

export default connect(mapStateToProps, { fetchReleaseList })(ReleaseList);