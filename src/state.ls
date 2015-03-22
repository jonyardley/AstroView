require! <[ baobab ]>

state = new baobab do
  mode: 'view'
  'max-images': 8
  isPreviewVisible: false
  images: []

module.exports = state