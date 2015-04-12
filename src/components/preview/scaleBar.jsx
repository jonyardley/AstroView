import React from 'react';
import gradient from '../../utils/gradient';
import ImageActions from '../../actions/imageActions';

const SCALE_BAR_WIDTH = 500

class ScaleBar extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.canvas = document.getElementById('scaleBar');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.drawImage(this.props.image.scaling.ctx.canvas,0,0);
  }

  componentDidUpdate(){
    gradient.render(this.props.image.scaling);
    this.ctx.drawImage(this.props.image.scaling.ctx.canvas,0,0);
  }

  render(){
    return (
      <div>
        <canvas id="scaleBar" className ="preview__scale-bar"
          height={1} width={SCALE_BAR_WIDTH} />
      </div>
    )
  }

}

module.exports = ScaleBar;
