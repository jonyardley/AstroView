require! <[
  react
  ../../actions/image-actions.ls
]>

d = react.DOM

add-image = ->
  image-actions.add-image!

sidebar = react.create-factory react.create-class do

  display-name: 'add-image'

  render: ->

    d.div class-name: @props.type + '__add-image sidebar__block',
      d.button on-click: add-image, class-name: 'gi gi-plus', @props.label


module.exports = sidebar