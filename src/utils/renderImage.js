import imageBuffer from 'imageBuffer';

const MPV = 255;


function RenderImage(image, scale, callback, isPreview){

  this.image = image;
  this.width = image.metaData.width;
  this.height = image.metaData.height;
  this.scale = scale || 1;
  this.scaleMin = image.scaling.scaleMin;
  this.scaleMax = image.scaling.scaleMax;
  this.sample = Math.floor(1 / this.scale);
  this.targetWidth = this.width * this.scale;
  this.targetHeight = this.height * this.scale;

  this.canvas = document.createElement('canvas');
  this.canvas.width = this.targetWidth;
  this.canvas.height = this.targetHeight;
  this.ctx = this.canvas.getContext('2d');

  this.imageData = this.ctx.createImageData(this.targetWidth, this.targetHeight);
  this.buffer = new imageBuffer(this.imageData);

  renderPixels.apply(this);

  if(isPreview){
    callback(this.buffer);
  }else{
    callback(this.buffer.createImage());
  }

}

function renderPixels() {

  let area = this.targetWidth * this.targetHeight,
      min = this.scaleMin,
      max = this.scaleMax,
      x = this.width,
      y = 0,
      ctx = this.image.scaling.ctx,
      ctxWidth = ctx.canvas.width;
      
  var pixelValues = [];

  for(let i = 0;i<ctxWidth;i++){
    pixelValues.push(ctx.getImageData(i, 0, 1, 1).data);
  }

  for(let i = 0;i<area;i++){

    let pixelIndex = (x * this.sample) + ((y * this.sample) * this.width),
        value = this.image.imageData[pixelIndex],
        v = ((value - min) * (pixelValues.length / (max - min))) || 0
        v = Math.floor(v);
    //clamp
    v = (v < 0) ? 0 : v;
    v = (v > (pixelValues.length - 1) || isNaN(v)) ? (pixelValues.length - 1) : v;
    let data = pixelValues[v];

    let r = data[0],
        g = data[1],
        b = data[2],
        a = data[3];

    // set the pixel, using original alpha
    this.buffer.setPixel(area - i, r, g, b, a);

    //if where at the start of a new row...
    if (i % this.targetWidth === 0){
      x = this.width; //reset x
      y++; // increase the row value
    }else{
      x--; // move to next column
    }

  }

}

module.exports = RenderImage;