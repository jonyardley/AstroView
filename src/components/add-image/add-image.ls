require! <[
  react
  ../../actions/image-actions.ls
]>

d = react.DOM

attempt-file-load = (event) ->
  files = event.target.files
  image-actions.add-image files[0]

sidebar = react.create-factory react.create-class do

  display-name: 'add-image'

  render: ->

    d.div class-name: 'add-image add-image--' + @props.type,
      d.button class-name: 'add-image__button gi gi-plus',
        d.input class-name: 'add-image__input', type: 'file', onChange: attempt-file-load
        d.span class-name: 'add-image__label', @props.label


module.exports = sidebar