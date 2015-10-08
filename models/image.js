export default function ImageModel(opts){

  let el = document.createElement('canvas'),
      ctx = el.getContext('2d');

  el.width = 500;
  el.height = 1;

  return {
    id: opts.id,
    name: opts.name,
    loaded: false,
    dirty: true,
    scale:{
      min: 0,
      max: 0,
      scaleMin: 0,
      scaleMax: 0,
      colors: ['#000000', '#FFFFFF'],
      function: 'linear'
    }
  }
}
