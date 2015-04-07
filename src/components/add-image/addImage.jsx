import React from 'react';
import ImageActions from '../../actions/imageActions';


function attemptFileLoad (event) {
  let files = event.target.files;
  ImageActions.addImage(files[0]);
}


class AddImage extends React.Component {

  render(){
    return (
      <div className={ "add-image add-image--" + this.props.classMod } >
        <button type="button" className="add-image__button btn btn-primary">
          <i className="glyphicon glyphicon-plus-sign"></i>
          <span className="add-image__label">{this.props.label}</span>
          <input className="add-image__input" type="file" onChange={attemptFileLoad.bind(this)} />
          </button>
      </div>
    )
  }

}


module.exports = AddImage;