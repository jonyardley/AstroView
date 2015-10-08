var scalingMethods = {
  linear: (value, min, max, range) => (value - min) * (range / (max - min)),
  sqrt: (value, min, max, range) => return Math.sqrt((value - min) * (range / (max - min))),
  cuberoot: (value, min, max, range) => Math.pow((value - min) * (range / (max - min)), 0.333),
  log: (value, min, max, range) => Math.log((value - min) * (range / (max - min))),
  loglog: (value, min, max, range) => Math.log(Math.log((value - min) * (range / (max - min)))),
  sqrtlog: (value, min, max, range) => Math.sqrt(Math.log((value - min) * (range / (max - min))))
};

function scale(scaleType, value, min, max, range){
  return scalingMethods[scaleType](value, min, max, range);
}

function values(){
  var output = [];
  Object.keys(scalingMethods).forEach((key) => output.push(key));
  return output;
}

export default { scale, values }
