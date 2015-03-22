require! <[
  react
]>

d = react.DOM

image-thumb = react.create-factory react.create-class do

  display-name: 'thumb'

  render: ->
    d.div class-name: 'thumb',
      d.span class-name: 'thumb__image', @props.image.id

module.exports = image-thumb
