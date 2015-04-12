import state from '../state';
import LoadImage from '../utils/loadImage';
import RenderImage from '../utils/renderImage';
import generateGradient from '../utils/gradient';

let data = state({
    images: ['images'],
    isPreviewVisible: ['isPreviewVisible'],
    activeImageId: ['activeImageId'],
    canvasImageRefs: ['canvasImageRefs'],
    canvas: ['canvas']
  }),
  images = data.images,
  canvasImages = data.canvasImages,
  previewImage = data.prevewImage,
  _id = 0;


//LISTENERS
console.log(data.activeImageId);
data.activeImageId.on(setActiveImage);



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


function getFileName(file){

  if(typeof file == 'string'){
    let strArray = file.split('/');
    return strArray[strArray.length-1];
  }else{
    return file.name;
  }

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

      ImageActions.showPreview(true);
    });
  });
}


function setActiveImage(){
  let canvas = data.canvas.get();

  if(canvas){
    let refs = data.canvasImageRefs.get(),
        activeRefId = data.activeImageId.get(),
        activeRef = refs[activeRefId];

    Object.keys(refs).forEach(function (id) {
      let ref = refs[id],
          isRef = ref == activeRef;
      ref.setVisible(isRef ? 1 : 0);
      if(isRef){
        canvas.setActiveObject(ref);
      }
    });

    canvas.renderAll();

  }

}


function updateCanvasImages(image){
  let refs = data.canvasImageRefs.get(),
      canvas = data.canvas.get(),
      imgRef;

  if(refs[image.id]){

    imgRef = refs[image.id];
    let opts = {
        left: imgRef.getLeft(),
        top: imgRef.getTop(),
        width: imgRef.getWidth(),
        height: imgRef.getHeight()
      };
    imgRef.setElement(image.imgRaw);
    imgRef.set(opts);

  }else{

    imgRef = new fabric.Image(image.imgRaw, {
      left: 0,
      top: 0
    });

    //TODO: CALCULATE BEST FIT
    imgRef.set('width', 500);
    imgRef.set('height', 500);
    imgRef.hasControls = false;

    canvas.add(imgRef);
    refs[image.id] = imgRef

  }

  setActiveImage();
  canvas.renderAll();

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

        let img = imageCursor.get();
        updateCanvasImages({id: img.id, imgRaw: img.imgRaw});
      });
    });

  },

  updateName: function updateName(image, name){
    let imageCursor = images.select({id: image.id});
    imageCursor.set('name', name);
  },

  showPreview: function showPreview(state){
    data.isPreviewVisible.edit(state);
  },

  setActiveImageId: function setActiveImageId(id){
    data.activeImageId.edit(id);
  },

  isImageActive: function isImageActive(id){
    return id === data.activeImageId.get();
  },

  renderPreview: function renderPreview(image, scale, callback){
    new RenderImage(image, scale, callback, true); //true = isPreview
  },

  updateScaling: function updateScaling(image, min, max){
    let imageCursor = images.select({id: image.id}),
        scaling = imageCursor.get().scaling;
    scaling.scaleMin = min;
    scaling.scaleMax = max;
    imageCursor.select('scaling').edit(scaling);
  },

  updateScaleFunction: function updateScaleFunction(id, newFunction){
    let imageCursor = images.select({id: id});
    imageCursor.select('scaling').set('scaleFunction', newFunction);
  },

  initFabricCanvas: function initFabricCanvas(canvasId){
    let canvas = new fabric.Canvas(canvasId);
    data.canvas.edit(canvas);
    let width = canvas.wrapperEl.parentNode.clientWidth,
        height = canvas.wrapperEl.parentNode.clientHeight;
    canvas.setWidth(width);
    canvas.setHeight(height);
  }

};

module.exports = ImageActions;
