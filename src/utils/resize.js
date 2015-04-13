module.exports = function resize(opts){

  let img = opts.img,
      canvas = opts.canvas,
      scale = scale || 1,
      wRatio = canvas.w / img.w,
      hRatio = canvas.h / img.h,
      ratio = wRatio < hRatio ? wRatio : hRatio,
      w = img.w * ratio,
      h = img.h * ratio;

  let offsetX = canvas.w - w,
      offsetY = canvas.h - h,
      x = offsetX / 2,
      y = offsetY / 2;

  console.log(x, y)

  return{
    x: x,
    y: y,
    w: w,
    h: h
  };
}
