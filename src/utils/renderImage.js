import imageBuffer from 'imageBuffer';

function RenderImage(image, scale, callback, isPreview, scaleValue){

  this.image = image;
  this.width = image.metaData.width;
  this.height = image.metaData.height;
  this.scale = scale || 1;
  this.scaleValue = scaleValue || 1000;
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
  console.log('Start rendering pixels');
  console.log('TODO: MAKE THIS ASYNC / NON BLOCKING');

  let area = this.targetWidth * this.targetHeight,
      min = 0,
      max = this.scaleValue,
      x = 0,
      y = 0;

  for(let i = 0;i<area;i++){

    let pixelIndex = (x * this.sample) + ((y * this.sample) * this.width),
        value = this.image.imageData[pixelIndex],
        v = (((value + min) / max) * 255) || 0;

    //clamp
    v = (v < 0) ? 0 : v;
    v = (v > 255 || isNaN(v)) ? 255 : v;

    let r = v,
        g = v,
        b = v,
        a = 255;

    // set the pixel, using original alpha
    this.buffer.setPixel(i, r, g, b, a);

    if (i % this.targetWidth === 0){
      x = 0;
      y++;
    }else{
      x++;
    }

  }

}

module.exports = RenderImage;

/**require! <[ imageBuffer ]>


render-image = (image, scale, callback) ->

  this.image = image
  this.width = image.meta-data.width
  this.height = image.meta-data.height
  this.scale = scale || 1
  this.sample = Math.floor(1 / this.scale)
  this.target-width = this.width * this.scale
  this.target-height = this.height * this.scale

  this.canvas = document.create-element('canvas')
  this.canvas.width = this.target-width
  this.canvas.height = this.target-height
  this.ctx = this.canvas.get-context('2d')

  this.imageData = this.ctx.create-image-data(this.targetWidth, this.targetHeight)
  this.buffer = new image-buffer(this.imageData)

  render-pixels.apply this.

  callback this.buffer.createImage!



render-pixels = ->

  console.log 'Start rendering pixels'
  console.log 'TODO: MAKE THIS ASYNC / NON BLOCKING'

  area = this.targetWidth * this.targetHeight
  min = 0
  max = 500
  x = 0
  y = 0

  console.log area

  for i from 0 to area by 1

    pixelIndex = (x * this.sample) + ((y * this.sample) * this.width)
    value = this.image.imageData[pixelIndex]
    v = ((value + min) / max) * 255 || 0

    #clamp
    v = 0 if v < 0
    v = 255 if v > 255 or isNaN v

    r = v
    g = v
    b = v
    a = 255

    # set the pixel, using original alpha
    this.buffer.setPixel i, r, g, b, a

    if i % this.targetWidth == 0
      x = 0
      y++
    else
      x++

  console.log 'Finished rendering pixels'

module.exports = render-image
**/