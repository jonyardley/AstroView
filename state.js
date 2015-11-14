import Baobab from "baobab";

const isProduction = process.env.NODE_ENV == "production";
const appState = new Baobab({
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
},{
  immutable: isProduction,
  persistent: false
});

const imageData = {};
const images = {};
const canvases = {};
const fabricImages = {};

export default {appState, imageData, images, canvases, fabricImages};
