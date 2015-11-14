import {canvases} from "../state";

export function init(canvasId) {
  const canvas = new fabric.Canvas(canvasId);
  canvases[canvasId] = canvas;
  let width = canvas.wrapperEl.parentNode.clientWidth,
      height = canvas.wrapperEl.parentNode.clientHeight;
  canvas.setWidth(width);
  canvas.setHeight(height);
}
