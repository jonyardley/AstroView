import React from 'react';
import AddImage from '../add-image/addImage.jsx';
import ImageThumb from '../image-thumb/imageThumb.jsx';


class Sidebar extends React.Component {

  render () {

    let images = [];

    this.props.images.forEach(function(image){
      let imageProps = {
        id: image.id,
        imgThumb: image.imgThumb,
        isDirty: image.isDirty
      };
      images.push (
        <ImageThumb key={image.id} image={imageProps} />
      )
    });

    let addImage = this.props.images < 1 ? '' : <AddImage classMod="sidebar" /> ;

    return (
      <div className="sidebar">
        <div className="sidebar__logo"></div>
        {images}
        {addImage}
      </div>
    )
  }

}


module.exports = Sidebar;
