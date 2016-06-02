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
    return (
      <div className={this.props.open ? "show-modal" : "hide-modal" }>
        Modal Window!!
      </div>
    );
  }
}