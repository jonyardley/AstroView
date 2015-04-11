import React from 'react';

class Stage extends React.Component {

  render(){

    let image;
    //if(!this.props.image.isDirty && this.props.image.imgRaw){
    //  image = <img src={this.props.image.imgRaw.src}/>
    //}

    return(
      <div className="stage">
        <canvas id="stage"></canvas>
      </div>
    )
  }

}

module.exports = Stage;
