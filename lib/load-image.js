import astro from './astro';

function LoadImage (file, callback) {

  let output = {};

  function onLoad (fits){
    if (fits.hdus.length > 0){

      let metaData = fits.getDataUnit();

      output.meta = metaData;
      output.header = fits.getHeader();

      //Assumes that each image only has one frame!
      metaData.getFrame(0, getImageData);
    }
  }

  function getImageData (imageData){
    output.data = imageData;
    callback(output);
  }

  let fits = new astro.FITS(file, onLoad);

}

export default LoadImage;
