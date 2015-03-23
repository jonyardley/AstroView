require! <[
  react
  ../../state.ls
]>

d = react.DOM

image-thumb = react.create-factory react.create-class do

  display-name: 'thumb'

  render: ->

    image = @props.image

    loading = image.is-dirty

    d.div class-name: 'thumb',
      if loading
        d.span class-name: 'thumb__image', 'loading...'
      else
        d.img src: image.img-raw.src, style: { width: 50, height: 50}, class-name: 'thumb__image'
        

module.exports = image-thumb
