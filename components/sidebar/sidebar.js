import React, {Component} from "react";
import LoadImage from "../load-image/load-image";
import Thumb from "./thumb";

class Sidebar extends Component {
  render(){
    return (
      <div className="sidebar">
        <LoadImage />
        <ul>
          {this.props.fits && this.props.fits.map(
            (item, index) => <Thumb {...item} index={index} />
          )}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
