import React from 'react';
import {fabric} from 'fabric';

const canvasId = 'stage'

class Stage extends React.Component {

  constructor(props){
    super(props);
    this.state = { imageRefs: [] }
  }

  componentDidMount(){
    this.canvas = new fabric.Canvas(canvasId);
    let width = this.canvas.wrapperEl.parentNode.clientWidth,
        height = this.canvas.wrapperEl.parentNode.clientHeight;
    this.canvas.setWidth(width);
    this.canvas.setHeight(height);
  }

  componentDidUpdate(){
    this.updateImages();
  }

  updateImages(){
    //TODO: MAKE THIS WORK WITH EVENTS!
    let image = this.props.images[0];
    let img = new fabric.Image(image, {
      left: 0,
      top: 0,
      width: 500,
      height: 500
    });
    this.canvas.add(img);
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
