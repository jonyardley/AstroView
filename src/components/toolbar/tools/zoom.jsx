import React from 'react';


class Zoom extends React.Component{

  constructor(props){
    super(props);
    this.state = { custom: '100', zoom: props.zoom };
  }

  stopInputPropagation(e){
    if(e.target.type === "number"){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }

  render(){

    return(
      <div className="zoom tool">
        <div className="dropdown">
          <a href="#" className="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" >Zoom: {this.state.zoom} <span className="caret"></span></a>
          <ul className="dropdown-menu" onClick={this.stopInputPropagation}>
            <li><a href="#">Fit</a></li>
            <li><a href="#">25%</a></li>
            <li><a href="#">50%</a></li>
            <li><a href="#">100%</a></li>
            <li className="divider"></li>
            <li>
              <div className="input-group">
                <span className="input-group-addon">%</span>
                <input type="number" min="0" defaultValue={this.state.custom} className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">Set</button>
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
