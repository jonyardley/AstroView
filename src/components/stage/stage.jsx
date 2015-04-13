import React from 'react';
import {fabric} from 'fabric';
import ImageActions from '../../actions/imageActions';

const canvasId = 'stage'

class Stage extends React.Component {


  componentDidMount(){
    ImageActions.initFabricCanvas(canvasId);
  }

  render(){

    return(
      <div className="stage">
        <canvas id={canvasId}></canvas>
      </div>
    )
  }

}

module.exports = Stage;
