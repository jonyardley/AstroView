import React from 'react';
import gradient from '../../utils/gradient';
import ImageActions from '../../actions/imageActions';

class ScaleBar extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.canvas = document.getElementById('scaleBar');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.drawImage(this.props.image.scaling.ctx.canvas,0,0);

    //ImageActions.updateScalingContext(this.props.image, this.ctx);
    //gradient.render(this.props.);
  }

  render(){
    return (
      <div>
        <canvas id="scaleBar" className ="preview__scale-bar" height={1} width={500} style={{height: 30, width: 500}} />
      </div>
    )
  }

}

module.exports = ScaleBar;