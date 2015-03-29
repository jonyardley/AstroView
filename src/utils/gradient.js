function render(opts){

  let ctx = opts.ctx,
      width = ctx.canvas.width,
      height = ctx.canvas.height,
      colors = opts.colors,
      min = opts.min,
      max = opts.max,
      scaleMin = opts.scaleMin,
      scaleMax = opts.scaleMax,
      scaleMin_n = normalize(opts.scaleMin, min, max, width),
      scaleMax_n = normalize(opts.scaleMax, min, max, width),
      stop = 1 / (colors.length - 1);

  let grad = ctx.createLinearGradient(scaleMin_n, 0, scaleMax_n, 0);

  colors.forEach(function(color, index, list){
    let colorStop = stop * index;
    grad.addColorStop(colorStop, color);
  });

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

}

function normalize(v, min, max, newMax){
  return (v - min) * (newMax / (max - min));
}


module.exports = {render};