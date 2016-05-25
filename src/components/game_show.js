import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/index';

class GameShow extends Component {
  componentWillMount() {
    this.props.fetchGame(this.props.params.resourceId);
  }

  listPlatforms(platform) {
    return `\xa0\xa0\xa0${platform.name}`;
  }

  renderImages = (image) => {
    return (
      <img src={image.small_url} onClick={this.showScreenshot(image)} key={image.small_url} />
    )
  }

  showScreenshot(image) {

  }

  render() {
    const { currentGame } = this.props;

    if (!currentGame.id) {
      return <h3>Loading...</h3>
    }

    console.log('in render', currentGame.images);
    return (
      <div>
        <h1 className="title">{currentGame.name}</h1>
        <p className="details pull-xs-right">
          Platforms:<strong>{currentGame.platforms.map(this.listPlatforms)}</strong>
        </p>
        <p className="details">Developed by: <strong>{currentGame.developers[0].name}</strong></p>
        <p className="details">Published by: <strong>{currentGame.publishers[0].name}</strong></p>
        <div>
          {currentGame.images.map(this.renderImages)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps, { fetchGame } )(GameShow);