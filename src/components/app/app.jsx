import React from 'react';
import state from '../../state';
import Sidebar from '../sidebar/sidebar.jsx';
import ImagePreview from '../preview/imagePreview.jsx'

var data = state({
  images: ['images'],
  previewImage: ['previewImage']
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
        previewImage = this.state.previewImage;

    let imagePreview = previewImage ? <ImagePreview image={previewImage}/> : '';

    return (
      <div className="main-inner">
        <Sidebar images={images} />
        {imagePreview}
      </div>
    )
  }
}

module.exports = App;