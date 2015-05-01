import React from 'react';
import ImageActions from '../../../actions/imageActions';

class Zoom extends React.Component{

  constructor(props){
    super(props);
    this.state = { custom: '100' };
  }

  stopInputPropagation(e){
    if(e.target.type === "number"){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }

  updateCustomZoomValue(value){
    this.setState({custom: value});
    this.updateZoom(this.state.custom);
  }

  updateZoomWithCustom(){
    ImageActions.setZoom(this.state.custom);
  }

  updateZoom(value){
    ImageActions.setZoom(value);
  }

  render(){

    let customZoomValueLink = {
      value: this.state.custom,
      requestChange: this.updateCustomZoom
    }

    return(
      <div className="zoom tool">
        <div className="dropdown">
          <a href="#" className="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" >Zoom: {this.props.value} <span className="caret"></span></a>
          <ul className="dropdown-menu" onClick={this.stopInputPropagation}>
            <li><a href="#" onClick={this.updateZoom.bind(this, 'Fit')}>Fit</a></li>
            <li><a href="#" onClick={this.updateZoom.bind(this, 0.25)}>25%</a></li>
            <li><a href="#" onClick={this.updateZoom.bind(this, 0.5)}>50%</a></li>
            <li><a href="#" onClick={this.updateZoom.bind(this, 1)}>100%</a></li>
            <li className="divider"></li>
            <li>
              <div className="input-group">
                <span className="input-group-addon">%</span>
                <input type="number" min="0" valueLink={customZoomValueLink} className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={this.updateCustomZoomValue.bind(this)}>Set</button>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Zoom;
