require! <[
  baobab
  react
]>

state =
  mode: 'view'
  'max-images': 8
  'is-preview-visible': false
  images: []

options =
  asynchronous: false
  shift-references: true
  mixins: [react.Pure-render-mixin]


state = new baobab state, options

module.exports = state
