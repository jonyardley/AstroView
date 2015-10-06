import React, {Component} from "react";
import {branch} from "baobab-react/higher-order";

function renderItem(item){
  return (<li>{item.file.name}</li>);
}

class List extends Component {

  render() {
    const fits = this.props.fits;

    return (
      <div>
        <ul>{fits.map(renderItem)}</ul>
      </div>
    );
  }
}

// Subscribing to the relevant data and binding actions to the component
export default branch(List, {
  cursors: {
    fits: ["fits"]
  }
});
