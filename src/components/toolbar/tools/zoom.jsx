import React from 'react';
class Toolbar extends React.Component{

  render(){
    return(
      <div className="zoom">
        <div className="btn-group">
          <a href="#" className="btn btn-default btn-xs">Primary</a>
          <a href="#" className="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown"><span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Toolbar;
