import React, {Component} from "react";
import {branch} from 'baobab-react/higher-order';
import actions from '../../actions/actions';
import {canvases, imageData, images} from "../../state";

const stageId = 'stage';

class Stage extends Component {

  componentDidMount(){
    actions.stage.init(stageId);
  }

  render(){
    return (
      <div className="stage" ref="stageWrapper">
        <canvas id={stageId}></canvas>
      </div>
    );
  }
}

export default branch(Stage, {
  cursors: {
    fits: ['fits']
  }
});
