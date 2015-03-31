import React from 'react';
import state from '../../state';
import Sidebar from '../sidebar/sidebar.jsx';
import ImagePreview from '../preview/imagePreview.jsx'
import Intro from '../intro/intro.jsx';
import Stage from '../stage/stage.jsx';

let data = state({
  images: ['images'],
  isPreviewVisible: ['isPreviewVisible'],
  activeImageId: ['activeImageId']
});

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = data.get();
  }

  componentDidMount(){
    data.listen.on('update', () => this.setState(data.get()));
  }

  componentWillUnmount(){
    data.listen.off('update', () => this.setState(data.get()));
  }

  render() {

    let images = this.state.images,
        previewImage = data.images.select({id: this.state.activeImageId}).get(),
        activeImage = data.images.select({id: this.state.activeImageId}).get();

    let imagePreview = /**this.state.isPreviewVisible**/ false ? <ImagePreview image={previewImage} key={previewImage.id}/> : '' ,
        stageContents = activeImage ? <Stage image={activeImage}/> : <Intro /> ;

    return (
      <div className="main-inner">
        
        <div className="stage-wrapper">
          {stageContents}
        </div>

        {imagePreview}

        <Sidebar images={images} />

      </div>
    )
  }
}

module.exports = App;