import LoadImage from "../lib/load-image";
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
  const fits = {
    id: id,
    name: getFileName(file),
    dirty: true,
    file: file,
    loaded: false
  };

  tree.push('fits', fits);
  counter++;

  LoadImage(file, function(data){
    imageData[id] = data;
    tree.select('fits', {id: id}).merge({
      loaded: true
    });
  });
}
