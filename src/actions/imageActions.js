import state from '../state';
import LoadImage from '../utils/loadImage';
import RenderImage from '../utils/renderImage';
import generateGradient from '../utils/gradient';

let data = state({
    images: ['images'],
    isPreviewVisible: ['isPreviewVisible'],
    activeImageId: ['activeImageId'],
    canvasImages: ['canvasImages']
  }),
  images = data.images,
  canvasImages = data.canvasImages,
  previewImage = data.prevewImage,
  _id = 0;

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
  constructor(name){
    this.id = getId();
    this.name = name;
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
      scaleFunction: 'linear',
      ctx: ctx
    };

  }
}


function updateCanvasImages(image){
  let ciArray = canvasImages.get();

  ciArray[image.id] = image.imgRaw;
  
  canvasImages.edit(ciArray)

}


function imageLoaded(data) {

  let id = this.id;

  let imageCursor = images.select({id: id});
  imageCursor.merge(data);
  ImageActions.setActiveImageId(id);

  let scaling = imageCursor.select('scaling'),
      max = getMax(data.imageData);

  scaling.set('max', max);
  scaling.set('scaleMax', max);

  let image = imageCursor.get();
  generateGradient.render(image.scaling);

  let scale = 60/image.metaData.width;

  //TODO: USE ASYNC TO MAKE THIS NICER!
  new RenderImage(image, scale, function(thumb){
    new RenderImage(image, 1, function(raw){
      let image = images.select({id: id});
      image.merge({
        imgRaw: raw,
        imgThumb: thumb,
        isDirty: false
      });

      updateCanvasImages({id: id, imgRaw: raw});

      //TODO: RE-ADD THIS FOR PRODUCTION!
      //ImageActions.showPreview(true);
    });
  });
}

function getFileName(file){

  if(typeof file == 'string'){
    let strArray = file.split('/');
    return strArray[strArray.length-1];
  }else{
    return file.name;
  }

}


let ImageActions = {

  addImage: function addImage(file){
    let newImage = new Image(getFileName(file));
    images.push(newImage);
    LoadImage(file, imageLoaded.bind(newImage));
  },

  removeImage: () => console.log('Remove Image'),

  updateImage: function(image){
    let imageCursor = images.select({id: image.id}),
    image = imageCursor.get();

    imageCursor.merge({isDirty: true});

    let scale = Math.floor(60/image.metaData.width);

    //TODO: USE ASYNC TO MAKE THIS NICER!
    new RenderImage(image, scale, function(thumb){
      new RenderImage(image, 1, function(raw){
        imageCursor.merge({
          imgThumb: thumb,
          imgRaw: raw,
          isDirty: false
        });

        updateCanvasImages(image);
      });
    });

  },

  showPreview: function showPreview(state){
    data.isPreviewVisible.edit(state);
  },

  setActiveImageId: function(id){
    data.activeImageId.edit(id);
  },

  isImageActive: function(id){
    return id === data.activeImageId.get();
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
  },

  updateScaleFunction: function(id, newFunction){
    let imageCursor = images.select({id: id});
    imageCursor.select('scaling').set('scaleFunction', newFunction);
  }

};

module.exports = ImageActions;
