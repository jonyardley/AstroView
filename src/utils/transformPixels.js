function transformPixels(data){

  var sample = data.sample,
      targetWidth = data.targetWidth,
      targetHeight = data.targetHeight,
      scaleMin = data.scaleMin,
      scaleMax = data.scaleMax,
      area = Math.floor(targetWidth * targetHeight),
      width = data.width,
      height = data.height,
      pixelValueMap = data.pixelValueMap,
      x = width,
      y = 0,
      imageData = data.imageData,
      context = data.tmpContext;

  for(var i = 0; i<area; i++){

    var pixelIndex = (x * sample) + (y * sample * width),
        value = imageData[pixelIndex],
        v = ((value - scaleMin) * (pixelValueMap.length / (scaleMax - scaleMin))) || 0
        v = Math.floor(v);

    //clamp
    v = (v < 0) ? 0 : v;
    v = (v > (pixelValueMap.length - 1) || isNaN(v)) ? (pixelValueMap.length - 1) : v;
    var data = pixelValueMap[v];

    var pi = area - i;
    // set the pixel values
    context.data[(pi*4)+0] = data[0];
    context.data[(pi*4)+1] = data[1];
    context.data[(pi*4)+2] = data[2];
    context.data[(pi*4)+3] = data[3];

    //if where at the start of a new row...
    if (i % targetWidth === 0){
      x = width; //reset x
      y++; // increase the row value
    }else{
      x--; // move to next column
    }
  }

  return context;
}

module.exports = transformPixels;