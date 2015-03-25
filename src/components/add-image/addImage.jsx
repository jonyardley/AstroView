import React from 'react';
import ImageActions from '../../actions/imageActions';


function attemptFileLoad (event) {
  let files = event.target.files;
  ImageActions.addImage(files[0]);
}


class AddImage extends React.Component {

  render(){
    return (
      <div className="add-image add-image--sidebar">
        <button className="add-image__button gi gi-plus">
          <input className="add-image__input" type="file" onChange={attemptFileLoad.bind(this)} />
        <span className="add-image_label">{/**Load Props here**/}</span>
        </button>
      </div>
    )
  }

}


module.exports = AddImage;