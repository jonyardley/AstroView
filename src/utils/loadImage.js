import {astro} from 'fitsjs';

window.astro  = astro;         // Hack to stop fitsjs breaking with commonjs
let FITS      = astro.FITS;    // Assign FITS

module.exports = function LoadImage (file, callback) {
  
  let output = {};

  function getImageData (imageData){
    output.imageData = imageData;
    output.isLoaded = true;
    callback(output);
  }

  function onLoad (fits){
    if (fits.hdus.length > 0){

      let metaData = fits.getDataUnit();

      output.metaData = metaData;
      output.header = fits.getHeader();

      //Assumes that each image only has one frame!
      metaData.getFrame(0, getImageData);
    }
  }

  let fits = new FITS(file, onLoad);

};
