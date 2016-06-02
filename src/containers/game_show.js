import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/index';
import ScreenshotModal from '../components/screenshot_modal';
import Thumbnail from '../components/thumbnail';

class GameShow extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false };
    this.showScreenshot = this.showScreenshot.bind(this);
  }

  componentWillMount() {
    this.props.fetchGame(this.props.params.resourceId);
  }

  listPlatforms(platform) {
    return `\xa0\xa0\xa0${platform.name}`;
  }

  renderImages = (image) => {
    return (
      <Thumbnail src={image} onClick={this.showScreenshot.bind(this, image)} key={image.small_url} />
    );
  }

  showScreenshot(image) {
    console.log(image);
    this.setState({modal: true});
  }

  renderScreenshot() {
    if (this.state.modal) {
      return (
        <ScreenshotModal open={this.state.modal} />
      );
    };
  }

  render() {
    const { currentGame } = this.props;

    if (!currentGame.id) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <h1 className="title">{currentGame.name}</h1>
        <p className="details pull-xs-right">
          <strong>Platforms:</strong>{currentGame.platforms.map(this.listPlatforms)}
        </p>
        <p className="details"><strong>Developed by:</strong> {currentGame.developers[0].name}</p>
        <p className="details"><strong>Published by:</strong> {currentGame.publishers[0].name}</p>
        <div>
          {currentGame.images.map(this.renderImages)}
        </div>
        <div>
          {this.renderScreenshot()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps, { fetchGame } )(GameShow);