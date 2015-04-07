import Worker from 'workerjs';
import transformPixels from './transformPixels';
const MPV = 255;

class RenderImage {

  // opts: image, scale, callback, isPreview
  constructor(image, scale, callback, isPreview){

    this.image = image;
    this.isPreview = isPreview;
    this.scale = scale || 1;

    this.width = this.image.metaData.width;
    this.height = this.image.metaData.height;
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
      imageData: this.image.imageData,
      pixelValueMap: this.getPixelValueMap(),
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

  getPixelValueMap(){
    let scaleCtx = this.image.scaling.ctx,
        ctxWidth = scaleCtx.canvas.width,
        pixelValueMap = [];

    for(let i = 0; i<ctxWidth; i++){
      pixelValueMap.push(scaleCtx.getImageData(i, 0, 1, 1).data);
    }

    return pixelValueMap;
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