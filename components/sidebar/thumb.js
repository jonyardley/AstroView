import React, {Component} from "react";

export default class Thumb extends Component {
  render(){
    return (
      <li key={`sidebar-${this.props.index}`}>{this.props.name} - {!this.props.loaded ? 'Loading...': ''}</li>
    );
  }
}
