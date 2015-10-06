export function addFits(tree, file) {
  console.log(file);
  tree.push('fits', {
    file: file
  });
}
