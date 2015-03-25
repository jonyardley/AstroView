import state from '../state';
import LoadImage from '../utils/loadImage';
import RenderImage from '../utils/renderImage';

let data = state({
  images: ['images'],
  previewImage: ['previewImage']
});
let images = data.images;
let previewImage = data.prevewImage;
let _id = 0;

function getId (){
  let id = _id;
  _id++;
  return id; 
}

class Image {
  constructor(){
    this.id = getId()
    this.isLoaded = false;
    this.isDirty = true;
  }
}


function imageLoaded(data) {
  let image = images.select({id: this.id});
  image.merge(data)
  new RenderImage(image.get(), 1, imageRendered.bind(this));
}

function imageRendered(data) {
  let image = images.select({id: this.id});
  image.merge({
    imgRaw: data,
    isDirty: false
  });

  //DEV
  ImageActions.showPreview(image.get());
}


let ImageActions = {

  addImage: function addImage(file){
    let newImage = new Image();
    images.push(newImage);
    LoadImage(file, imageLoaded.bind(newImage));
  },
  removeImage: () => console.log('Remove Image'),
  updateImage: () => console.log('Update Image'),

  showPreview: function showPreview(image){
    data.previewImage.edit(image);
  },

  renderPreview: function renderPreview(image, scale, scaleValue, callback){
    new RenderImage(image, scale, callback, true, scaleValue); //true = isPreview
  }

};

module.exports = ImageActions;

// DEV
let imagePath = '/fits/656nmos.fits';
ImageActions.addImage(imagePath);