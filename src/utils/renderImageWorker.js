var transformPixels = require('./transformPixels');

onmessage = function (msg) {
  var data = msg.data,
      newImageData = transformPixels(data);
  postMessage(newImageData);
};