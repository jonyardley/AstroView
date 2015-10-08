import LoadImage from "../lib/load-image";
import ImageModel from "../models/image";
import {imageData} from "../state";
let counter = 0;

function getFileName(file){
  if(typeof file == 'string'){
    let strArray = file.split('/');
    return strArray[strArray.length-1];
  }else{
    return file.name;
  }
}

export default function addFits(tree, file) {
  const id = counter;
  const fits = ImageModel({
    id: id,
    name: getFileName(file)
  });

  tree.push('fits', fits);
  counter++;

  LoadImage(file, function(data){
    imageData[id] = data;
    tree.select('fits', {id: id}).merge({
      loaded: true
    });
  });
}
