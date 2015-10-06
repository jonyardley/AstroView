import Baobab from "baobab";

const tree = new Baobab({
  appState: {
    mode: 'view',
    maxImages: 8,
    isPreviewVisible: false,
    activeImageId: null,
    canvas: null,
    tools:{
      zoom: '100%'
    }
  },
  fits: [],
  images: {
    thumb: [],
    raw: [],
    canvas: []
  }
});

export default tree;
