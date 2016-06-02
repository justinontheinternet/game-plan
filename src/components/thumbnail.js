import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render() {
    return (
      <img className="img-thumbnail" src={this.props.src.small_url} onClick={this.props.onClick} />
    );
  }
}