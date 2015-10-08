import Baobab from "baobab";

const isProduction = process.env.NODE_ENV == "production";

const tree = new Baobab({
  appState: {
    mode: 'view',
    maxImages: 8,
    preview: false,
    activeId: null,
    canvas: null,
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
const canvasRefs = {};

export default {tree, imageData, images, canvasRefs};
