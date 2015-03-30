import React from 'react';
import ImageActions from '../../actions/imageActions';

function showPreview(event) {
  ImageActions.showPreview(this.props.image);
}

class ImageThumb extends React.Component {

  render(){

    let image = this.props.image,
        loading = image.isDirty,
        imageThumb;

    if (loading){
      imageThumb = <div className="thumb__image"><div className="image__thumb--loading"></div></div>;
    }else{
      imageThumb = <img src={image.imgThumb.src} className="thumb__image" onClick={showPreview.bind(this)}/>;
    }

    return(
      <div className="thumb">
        {imageThumb}
      </div>
    );
  }
  
}

module.exports = ImageThumb;
