import React, { Component } from 'react';

export default class ScreenshotModal extends Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open }
  }

  render() {
    const { image } = this.props;

    return (
      <div className={this.props.open ? "show-modal" : "hide-modal"}>
        <button type="button" className="btn btn-default btn-css" aria-label="Close" onClick={this.props.onClick} >
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>Close
        </button>
        <img src={image.super_url} className="modal-image" />
      </div>
    );
  }
}