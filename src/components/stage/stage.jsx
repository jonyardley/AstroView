import React from 'react';
import {fabric} from 'fabric';
import ImageActions from '../../actions/imageActions';

const canvasId = 'stage'

class Stage extends React.Component {


  componentDidMount(){
    ImageActions.initFabricCanvas(canvasId);
  }

  /**updateImages(){
    //TODO: MAKE THIS WORK WITH EVENTS!
    let image = this.props.images[0];
    let img = new fabric.Image(image, {
      left: 0,
      top: 0,
      width: 500,
      height: 500
    });
    this.canvas.add(img);
  }**/


  render(){

    return(
      <div className="stage">
        <canvas id={canvasId}></canvas>
      </div>
    )
  }

}

module.exports = Stage;
