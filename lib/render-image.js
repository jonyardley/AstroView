import Worker from 'workerjs';
import transformPixels from './transformPixels';
const MPV = 255;

class RenderImage {

  // opts: image, scale, callback, isPreview
  constructor(fits, imageData, scale = 1, callback, isPreview){

    this.image = fits;
    this.isPreview = isPreview;
    this.scale = scale;

    this.width = this.imageData.meta.width;
    this.height = this.imageData.meta.height;
    this.scaleMin = this.image.scaling.scaleMin;
    this.scaleMax = this.image.scaling.scaleMax;
    this.sample = Math.floor(1 / this.scale);
    this.targetWidth = Math.floor(this.width * this.scale);
    this.targetHeight = Math.floor(this.height * this.scale);

    let tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = this.targetWidth;
    tmpCanvas.height = this.targetHeight;

    let tmpCtx = this.tmpCtx = tmpCanvas.getContext('2d');

    let data = {
      width: this.width,
      height: this.height,
      targetWidth: this.targetWidth,
      targetHeight: this.targetHeight,
      sample: this.sample,
      scaleMin: this.scaleMin,
      scaleMax: this.scaleMax,
      imageData: this.imageData.data,
      colors: this.image.scaling.colors,
      scaleFunction: this.image.scaling.function,
      tmpContext: this.tmpCtx.getImageData(0,0,this.targetWidth, this.targetHeight)
    };

    if(isPreview){
      this.render(data, callback);
    }else{
      this.workerRender(data, function(imageData){
        tmpCtx.putImageData(imageData, 0, 0);
        let url = tmpCtx.canvas.toDataURL(),
            img = new Image();
        img.src = url;
        callback(img);
      });
    }

  }

  workerRender(data, done){
    var worker = new Worker('./renderImageWorker.js', true);

    worker.onmessage = function(e){
      //TODO: Handle Errors here!
      let canvasData = e.data;
      done(canvasData);
    }.bind(this);

    worker.postMessage(data);

  }

  render(data, done){
    var imageData = transformPixels(data);
    done(imageData);
  }

}

module.exports = RenderImage;
