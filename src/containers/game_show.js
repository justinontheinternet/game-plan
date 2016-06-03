import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/index';
import ScreenshotModal from '../components/screenshot_modal';
import Thumbnail from '../components/thumbnail';

class GameShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      image: null };
    this.showScreenshot = this.showScreenshot.bind(this);
  }

  componentWillMount() {
    this.props.fetchGame(this.props.params.resourceId);
  }

  listPlatforms(platform) {
    return `\xa0\xa0\xa0${platform.name}`;
  }

  renderDeveloper() {
    if (this.props.currentGame.developers) {
      return this.props.currentGame.developers[0].name;
    }
  }

  renderPublisher() {
    if (this.props.currentGame.publishers) {
      return this.props.currentGame.publishers[0].name;
    }
  }

  renderImages = (image) => {
    return (
      <Thumbnail src={image} onClick={this.showScreenshot.bind(this, image)} key={image.small_url} />
    );
  }

  showScreenshot(image) {
    this.setState({
      modal: true,
      image: image
    });
  }

  renderScreenshot() {
    if (this.state.modal) {
      return (
        <ScreenshotModal open={this.state.modal} image={this.state.image} onClick={this.hideScreenshot} />
      );
    };
  }

  hideScreenshot = () => {
    this.setState({
      modal: false
    });
  }

  render() {
    const { currentGame } = this.props;
    console.log("currentGame", currentGame);

    if (!currentGame.id) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <h1 className="title">{currentGame.name}</h1>
        <p className="details pull-xs-right">
          <strong>Platforms:</strong>{currentGame.platforms.map(this.listPlatforms)}
        </p>
        <p className="details"><strong>Developed by:</strong> {this.renderDeveloper()}</p>
        <p className="details"><strong>Published by:</strong> {this.renderPublisher()}</p>
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