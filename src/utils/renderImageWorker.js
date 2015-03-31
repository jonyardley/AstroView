
function transformBuffer(data){

  var sample = data.sample,
      targetWidth = data.targetWidth,
      targetHeight = data.targetHeight,
      scaleMin = data.scaleMin,
      scaleMax = data.scaleMax,
      area = Math.floor(targetWidth * targetHeight),
      width = data.width,
      height = data.height,
      imageData = data.imageData,
      pixelValues = data.pixelValues,
      x = width,
      y = 0,
      imageData = data.imageData,
      pixels = data.targetArray;

  for(var i = 0; i<area; i++){

    var pixelIndex = (x * sample) + (y * sample * width),
        value = imageData[pixelIndex],
        v = ((value - scaleMin) * (pixelValues.length / (scaleMax - scaleMin))) || 0
        v = Math.floor(v);

        console.log(imageData[pixelIndex]);
    //clamp
    v = (v < 0) ? 0 : v;
    v = (v > (pixelValues.length - 1) || isNaN(v)) ? (pixelValues.length - 1) : v;
    var data = pixelValues[v];

    var r = data[0],
        g = data[1],
        b = data[2],
        a = data[3];

    // set the pixel, using original alpha
    //buffer.setPixel(area - i, r, g, b, a);
    pixels[(i*4)+0] = a;
    pixels[(i*4)+1] = a;
    pixels[(i*4)+2] = a;
    pixels[(i*4)+3] = a;

    //if where at the start of a new row...
    if (i % targetWidth === 0){
      x = width; //reset x
      y++; // increase the row value
    }else{
      x--; // move to next column
    }
  }

  return pixels;
}


onmessage = function (msg) {
  var data = msg.data,
      newImageData = transformBuffer(data);

  postMessage(newImageData);
};