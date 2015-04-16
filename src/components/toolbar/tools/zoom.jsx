import React from 'react';


class Zoom extends React.Component{

  constructor(props){
    super(props);
    this.state = { custom: '100%', zoom: 'Fit' };
  }

  stopInputPropagation(e){
    if(e.target.type === "text"){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }

  render(){

    return(
      <div className="zoom">
        <div className="dropdown">
          <a href="#" className="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" >Zoom: {this.state.zoom} <span className="caret"></span></a>
          <ul className="dropdown-menu" onClick={this.stopInputPropagation}>
            <li><a href="#">50%</a></li>
            <li><a href="#">100%</a></li>
            <li><a href="#">150%</a></li>
            <li className="divider"></li>
            <li><div className="btn-group">
              <input defaultValue={this.state.custom} className="input-sm" />
              <a href="#" className="btn btn-primary btn-sx">Go</a>
            </div></li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Zoom;
