import FITS from "./fits";

export interface IFitsData {
  metaData: {
    bitpix: number;
    blob: Blob;
    bscale: number;
    bytes: number;
    bzero: number;
    depth: number;
    frame: number;
    frameLength: number;
    frameOffsets: any[];
    height: number;
    length: number;
    nBuffers: number;
    naxis: number[];
    width: number;
    getFrame: (
      frame: number,
      callback: (imageData: Float32Array) => void
    ) => void;
  };
  header: {
    block: string;
    cardIndex: number;
    cards: any;
    extensions: boolean;
    primary: boolean;
    verifyCard: any;
  };
}

const parseData = (fitsData: any) => ({
  metaData: fitsData.getDataUnit(),
  header: fitsData.getHeader()
});

const getImageData = (fitsData: IFitsData) =>
  new Promise((resolve, reject) => {
    fitsData.metaData.getFrame(0, imageData =>
      resolve({ ...fitsData, imageData })
    );
  });
const loadImage = (file: File) =>
  new Promise((resolve, reject) => {
    return new FITS(file, resolve);
  })
    .then(parseData)
    .then(getImageData);

export default loadImage;
