import React, {Component} from 'react';
import {branch} from "baobab-react/higher-order";
import * as actions from "../../actions";

class LoadImage extends Component {

  attemptFileLoad(e) {
    let file = event.target.files[0];
    this.props.actions.add(file);
  }

  render(){
    return (
      <div>
        <button type="button">
          <span>{this.props.label}</span>
          <input type="file" onChange={this.attemptFileLoad.bind(this)} />
        </button>
      </div>
    )
  }

}

export default branch(LoadImage, {
  cursors: {
    fits: ["fits"]
  },
  actions: {
    add: actions.addFits
  }
});
