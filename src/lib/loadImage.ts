import FITS from "./fits";

const parseData = (fitsData: any) => ({
  metaData: fitsData.getDataUnit(),
  header: fitsData.getHeader()
});

const getImageData = fitsData =>
  new Promise((resolve, reject) => {
    fitsData.metaData.getFrame(0, imageData =>
      resolve({ ...fitsData, imageData })
    );
  });

const loadImage = file =>
  new Promise((resolve, reject) => {
    return new FITS(file, resolve);
  })
    .then(parseData)
    .then(getImageData);

export default loadImage;
