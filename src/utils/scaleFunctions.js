var scalingMethods = {
  linear: function(value, min, max, range){
    return ((value + min) / max) * range;
    //return (value - min) * (range / (max - min));
  },
  sqrt: function(value, min, max, range){
    //return Math.sqrt((value + min) / max ) * range;
    return Math.sqrt((value - min) * (range / (max - min)));
    //TODO: ALL THE OTHERS!!!
  },
  cuberoot: function(value, min, max, range){
   return Math.pow((value + min) / max, 0.333) * range;
  },
  log: function(value, min, max, range){
    return Math.log((value + min) / max ) * range;
  },
  loglog: function(value, min, max, range){
      return Math.log(Math.log((value + min) / max )) * range;
  },
  sqrtlog: function(value, min, max, range){
    return Math.sqrt(Math.log((value + min) / max )) * range;
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
