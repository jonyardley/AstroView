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
      imageThumb = <span className="thumb__image">loading...</span>;
    }else{
      imageThumb = <img src={image.imgRaw.src} style={{width: 50, height: 50}} className="thumb__image" onClick={showPreview.bind(this)}/>;
    }

    return(
      <div className="thumb">
        {imageThumb}
      </div>
    );
  }
  
}

module.exports = ImageThumb;
