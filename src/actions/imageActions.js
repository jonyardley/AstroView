import state from '../state';
import LoadImage from '../utils/loadImage';
import RenderImage from '../utils/renderImage';
import gradient from '../utils/gradient';

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

function getMax(imageData){
  let length = imageData.length,
      max = 0;
  while(length--){
    let value = imageData[length];
    if(value > max){
      max = value;
    }
  }
  return max;
}

class Image {
  constructor(){
    this.id = getId()
    this.isLoaded = false;
    this.isDirty = true;
      //create scalebar canvas
    let el = document.createElement('canvas'),
        ctx = el.getContext('2d');
  
    el.width = 500;
    el.height = 1;

    this.scaling = {
      min: 0,
      max: 0,
      scaleMin: 0,
      scaleMax: 0,
      colors: ['black', 'red', 'orange', 'yellow', 'white'],
      ctx: ctx
    };

  }
}


function imageLoaded(data) {

  let imageCursor = images.select({id: this.id});
  imageCursor.merge(data);

  var scaling = imageCursor.select('scaling');
  scaling.set('max', getMax(data.imageData));
  scaling.set('scaleMax', getMax(data.imageData));

  let image = imageCursor.get();

  gradient.render(image.scaling);

  new RenderImage(image, 1, imageRendered.bind(this));
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
  
  updateImage: function(image){
    let imageCursor = images.select({id: image.id});
    imageCursor.edit(image);
  },

  showPreview: function showPreview(image){
    data.previewImage.edit(image);
  },

  renderPreview: function renderPreview(image, scale, callback){
    new RenderImage(image, scale, callback, true); //true = isPreview
  },

  updateScaling: function(image, min, max){
    let imageCursor = images.select({id: image.id}),
        scaling = imageCursor.get().scaling;
    scaling.scaleMin = min;
    scaling.scaleMax = max;
    imageCursor.select('scaling').edit(scaling);
  }

};

module.exports = ImageActions;

// DEV
//let imagePath = 'fits/656nmos.fits';
let imagePath = 'fits/6008B000.fits';
ImageActions.addImage(imagePath);

