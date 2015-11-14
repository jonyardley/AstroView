import React, {Component} from "react";
import {branch} from 'baobab-react/higher-order';
import actions from '../../actions/actions';
import {canvases, imageData, images} from "../../state";


class Process extends Component {
  render(){
    return (
      <div className="process">
        <canvas id="process"></canvas>
      </div>
    );
  }
}

export default branch(Process, {
  cursors: {
    fits: ['fits']
  }
});
