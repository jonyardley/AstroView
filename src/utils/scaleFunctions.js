var scalingMethods = {
  linear: function(value, min, max, range){
    return (value - min) * (range / (max - min));
  },
  sqrt: function(value, min, max, range){
    return Math.sqrt((value - min) * (range / (max - min)));
  },
  cuberoot: function(value, min, max, range){
   return Math.pow((value - min) * (range / (max - min)), 0.333);
  },
  log: function(value, min, max, range){
    return Math.log((value - min) * (range / (max - min)));
  },
  loglog: function(value, min, max, range){
      return Math.log(Math.log((value - min) * (range / (max - min))));
  },
  sqrtlog: function(value, min, max, range){
    return Math.sqrt(Math.log((value - min) * (range / (max - min))));
  }
};

function scale(scaleType, value, min, max, range){
  return scalingMethods[scaleType](value, min, max, range);
}

function values(){
  var output = [];
  Object.keys(scalingMethods).forEach(function(key) {
    output.push(key);
  });
  return output;
}

module.exports = {
  scale: scale,
  values: values
};
