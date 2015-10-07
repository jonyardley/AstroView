import React, {Component} from 'react';
import {branch} from "baobab-react/higher-order";
import * as actions from "../../actions/actions";

class LoadImage extends Component {

  handleUpdate(e) {
    let file = event.target.files[0];
    if (file) this.props.actions.add(file);
  }

  render(){
    return (
      <div className="load-image">
        <button type="button">
          <span>+</span>
          <input type="file" onChange={this.handleUpdate.bind(this)} />
        </button>
      </div>
    )
  }
}

export default branch(LoadImage, {
  actions: {
    add: actions.addFits
  }
});
