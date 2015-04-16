import React from 'react';
import Zoom from './tools/zoom.jsx'

class Toolbar extends React.Component{

  render(){
    return(
      <div className="toolbar">
        <Zoom />
      </div>
    )
  }
}

module.exports = Toolbar;
