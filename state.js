const isProduction = process.env.NODE_ENV == "production";
const appState = {
  appState: {
    mode: 'view',
    maxImages: 8,
    processing: false,
    activeId: null,
    tools:{
      zoom: '100%'
    }
  },
  fits: []
};

const imageData = {};
const images = {};
const canvases = {};
const fabricImages = {};

export default {appState, imageData, images, canvases, fabricImages};
