var Color = require('color');
var scaleFunctions = require('./scaleFunctions').scale;
var Gradient = require('interpolation-arrays');

function generateGradient(colors){

  var colorArray = colors.map(function(colorValue){
    var color = Color(colorValue);

    return color.rgbArray();

  });

  return Gradient(colorArray);

}

function transformPixels(data){

  var sample = data.sample,
      targetWidth = data.targetWidth,
      targetHeight = data.targetHeight,
      scaleMin = data.scaleMin,
      scaleMax = data.scaleMax,
      area = Math.floor(targetWidth * targetHeight),
      width = data.width,
      height = data.height,
      x = width,
      y = 0,
      imageData = data.imageData,
      context = data.tmpContext,
      scaleFunction = data.scaleFunction,
      gradient = generateGradient(data.colors);

  for(var i = 0; i<area; i++){

    var pixelIndex = (x * sample) + (y * sample * width),
        value = imageData[pixelIndex],
        v = scaleFunctions(scaleFunction, value, scaleMin, scaleMax, 1);

    //clamp
    v = (v < 0 || isNaN(v)) ? 0 : v;
    v = (v > 1) ? 1 : v;

    var pv = gradient(v), //pixel value
        pi = area - i; //pixel value

    // set the pixel values
    context.data[(pi*4)+0] = pv[0];
    context.data[(pi*4)+1] = pv[1];
    context.data[(pi*4)+2] = pv[2];
    context.data[(pi*4)+3] = 255;

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
