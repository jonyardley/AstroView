import React from 'react';
import AddImage from '../add-image/addImage.jsx';
import ImageThumb from '../image-thumb/imageThumb.jsx';


class Sidebar extends React.Component {

  render () {

    let images = [];

    this.props.images.forEach(function(image){
      images.push (
        <ImageThumb key={image.id} image={image} />
      )
    });

    return (
      <div className="sidebar">
        <div className="sidebar__logo"></div>
        {images}
        <AddImage/>
      </div>
    )
  }

}


module.exports = Sidebar;
