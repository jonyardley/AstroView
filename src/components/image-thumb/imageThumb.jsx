import React from 'react';
import ImageActions from '../../actions/imageActions';

class ImageThumb extends React.Component {

  showPreview(event) {
    let id = this.props.image.id;
    if(ImageActions.isImageActive(id)){
      ImageActions.showPreview(true);
    }else{
      ImageActions.setActiveImageId(id);
    }
  }

  render(){

    let image = this.props.image,
        loading = image.isDirty,
        active = ImageActions.isImageActive(this.props.image.id) ? 'thumb--active' : '',
        imageThumb;

    if (loading){
      imageThumb = <div className="thumb__image"><div className="image__thumb--loading"></div></div>;
    }else{
      imageThumb = <img src={image.imgThumb.src} className={"thumb__image " + active}  onClick={this.showPreview.bind(this)}/>;
    }

    return(
      <div className="thumb">
        {imageThumb}
      </div>
    );
  }
  
}

module.exports = ImageThumb;
