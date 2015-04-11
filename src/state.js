import React from 'react';
import Boabab from 'baobab';

var data = {
  mode: 'view',
  maxImages: 8,
  isPreviewVisible: false,
  activeImageId: null,
  images: [],
  canvasImages: []
};

var options = {
  asynchronous: false,
  shiftReferences: true,
  mixins: [React.PureRenderMixin]
};

var cursors = new Boabab(data, options);


/**
 * Get Value of all cusors
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
function getAll (opts) {

  return function(){

    let output = {};

    Object.keys(opts).forEach(function (key) {

      let cursor = opts[key];

      output[key] = cursor.get();

    });

    return output;
  }

}

/**
 * Helper method to get cursors, cursor data and listen to events
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
function state (opts){

  let _cursors = {},
      listen;

  Object.keys(opts).forEach(function (key) {

    let obj = opts[key];

    let cursor = cursors.select.apply(cursors, obj);
    _cursors[key] = cursor;

    if(!listen){
      listen = cursor;
    }else{
      listen = listen.or(cursor);
    }

  });

  var get = getAll(_cursors);

  var output = Object.create(_cursors);
  output.get = get;
  output.listen = listen;
  return output

}


module.exports = state;
