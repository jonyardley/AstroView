import React from 'react';
import state from '../../state';
import Sidebar from '../sidebar/sidebar.jsx';
import ImagePreview from '../preview/imagePreview.jsx'
import Intro from '../intro/intro.jsx';
import Stage from '../stage/stage.jsx';
import Toolbar from '../toolbar/toolbar.jsx';

let data = state({
  images: ['images'],
  isPreviewVisible: ['isPreviewVisible'],
  activeImageId: ['activeImageId'],
  tools: ['tools']
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

    let imagePreview = this.state.isPreviewVisible ? <ImagePreview image={previewImage} key={previewImage.id}/> : '' ,
        stageContents = activeImage ? <Stage images={this.state.canvasImages}/> : <Intro />,
      toolbar = activeImage? <Toolbar tools={this.state.tools} /> : '';

    return (
      <div className="main-inner">

        <div className="stage-wrapper">
          {stageContents}
        </div>

        {toolbar}

        {imagePreview}

        <Sidebar images={images} />

      </div>
    )
  }
}

module.exports = App;
