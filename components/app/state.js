import Baobab from "baobab";

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
  immutable: false, //This is disabled for performance reasons!
  persistent: false //This is disabled for performance reasons!
});

export default tree;
