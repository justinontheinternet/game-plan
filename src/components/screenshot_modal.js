import React, { Component } from 'react';

export default class ScreenshotModal extends Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open || false }
  }

  handleShow() {
    this.setState({open: true});
  }

  handleHide() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        Modal Window!!
      </div>
    );
  }
}