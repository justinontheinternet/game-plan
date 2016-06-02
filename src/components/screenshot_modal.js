import React, { Component } from 'react';

export default class ScreenshotModal extends Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open }
  }

  handleShow() {
    this.setState({open: true});
  }

  handleHide() {
    this.setState({open: false});
  }

  render() {
    const { image } = this.props;
    
    return (
      <img src={image.super_url} className={this.props.open ? "show-modal img-thumbnail" : "hide-modal" } />
    );
  }
}