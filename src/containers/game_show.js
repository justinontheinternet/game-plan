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
      <Thumbnail src={image} onClick={this.showScreenshot} key={image.small_url} />
    );
  }
// onClick initiate another function that sets state modal on/off
  showScreenshot() {
    console.log(this.state);
    this.setState({modal: true});
    //when this component has a modal state true, return the modal
    if (this.state.modal) {
      return ( //the open prop should be determined by state of this component and will be used in ScrennshotModal component
        <ScreenshotModal open={this.state.modal} />
      );
    };
  }

  render() {
    const { currentGame } = this.props;

    if (!currentGame.id) {
      return <h3>Loading...</h3>
    }

    console.log('in render', currentGame.images);
      // in return, add js calling function that changes this state
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps, { fetchGame } )(GameShow);