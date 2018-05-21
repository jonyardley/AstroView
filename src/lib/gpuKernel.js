import GPU from "gpu.js";

function kernel(width, height, canvas) {
  const gpu = new GPU();

  //Look into this: https://github.com/gpujs/gpu.js#flattened-typed-array-support
  return gpu
    .createKernel(
      function(d, w, min, max, scaleFn) {
        const x = this.thread.x;
        const y = this.thread.y * w;
        const index = x + y;
        const value = d[index];
        const range = 1;
        let v = 0;

        if (scaleFn === 0) {
          v = (value - min) * (range / (max - min));
        } else if (scaleFn === 1) {
          v = Math.sqrt((value - min) * (range / (max - min)));
        } else if (scaleFn === 2) {
          v = Math.pow((value - min) * (range / (max - min)), 0.333);
        } else if (scaleFn === 3) {
          v = Math.log((value - min) * (range / (max - min)));
        } else if (scaleFn === 4) {
          v = Math.log(Math.log((value - min) * (range / (max - min))));
        } else if (scaleFn === 5) {
          v = Math.sqrt(Math.log((value - min) * (range / (max - min))));
        } else {
          v = value;
        }

        this.color(v, v, v, 1);
      },
      {
        canvas
      }
    )
    .setOutput([width, height])
    .setGraphical(true);
}

export default kernel;
