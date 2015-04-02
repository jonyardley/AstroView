import Worker from 'workerjs';

const MPV = 255;

function RenderImage(image, scale, callback, isPreview){

  this.image = image;
  this.width = image.metaData.width;
  this.height = image.metaData.height;
  this.scale = scale || 1;
  this.scaleMin = image.scaling.scaleMin;
  this.scaleMax = image.scaling.scaleMax;
  this.sample = Math.floor(1 / this.scale);
  this.targetWidth = Math.floor(this.width * this.scale);
  this.targetHeight = Math.floor(this.height * this.scale);

  this.canvas = document.createElement('canvas');
  this.canvas.width = this.targetWidth;
  this.canvas.height = this.targetHeight;
  this.ctx = this.canvas.getContext('2d');

  renderPixels.call(this, renderDone.bind(this));

  function renderDone(imageData){
    
    if(isPreview){
      callback(imageData);
    }else{
      this.ctx.putImageData(imageData, 0, 0);
      let url = this.ctx.canvas.toDataURL(),
          img = new Image();
      img.src = url;
      callback(img);
    }

  }
}


function renderPixels(done) {

  //SET SCALING CANVAS AND GET ARRAY OF VALUES
  let scaleCtx = this.image.scaling.ctx,
      ctxWidth = scaleCtx.canvas.width,
      pixelValues = [];

  for(let i = 0;i<ctxWidth;i++){
    pixelValues.push(scaleCtx.getImageData(i, 0, 1, 1).data);
  }

  //RENDER PIXEL LOOP
  //TO BE REPLACED WITH WORKER!
  //***************************


  var worker = new Worker('./renderImageWorker.js', true);

  worker.onmessage = function(e){ 
    let canvasData = e.data;
    done(canvasData);
  }.bind(this);

  worker.postMessage({
    width: this.width,
    height: this.height,
    targetWidth: this.targetWidth,
    targetHeight: this.targetHeight,
    sample: this.sample,
    scaleMin: this.scaleMin,
    scaleMax: this.scaleMax,
    imageData: this.image.imageData,
    pixelValues: pixelValues,
    targetArray: this.ctx.getImageData(0,0,this.canvas.width, this.canvas.height)
  });

}

module.exports = RenderImage;