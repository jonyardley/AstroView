import React, {Component} from "react";
import {branch} from 'baobab-react/higher-order';
import LoadImage from "../load-image/load-image";

class Sidebar extends Component {
  render(){
    return (
      <div className="sidebar">
        <LoadImage />
        <ul>
          {this.props.fits.map(function(item, index, list){
            return <li key={`sidebar-${index}`}>{item.name} - {!item.loaded ? 'Loading...': ''}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default branch(Sidebar, {
  cursors: {
    fits: ['fits']
  }
});
