import React from 'react';
import AddImage from '../add-image/addImage.jsx';

class Intro extends React.Component{

  render(){
    return(
      <div className="intro">
        <div className="intro__inner">

          <img className="intro__logo" src="img/logo-white-large.png"/>
          <h1>AstroView</h1>
          <h2>View, compsite & analyse astronomical images in your browser</h2>

          <div className="intro__panel panel">
            <p>Load an image to get started!</p>
            <AddImage label="Add Image" classMod="intro" />

            <div className="intro__info">
              <p>Don't have one? Try one of these:</p>
              <a href="#">Link to image</a><br/>
              <a href="#">Link to another image</a><br/>
            </div>
            
            <a href="http://en.wikipedia.org/wiki/FITS">Learn more about FITS images here</a>

          </div>
          
        </div>
      </div>
    )
  }

}

module.exports = Intro;