require! <[ imageBuffer ]>


render-image = (image, scale, callback) ->

  @image = image
  @width = image.meta-data.width
  @height = image.meta-data.height
  @scale = scale || 1
  @sample = Math.floor(1 / @scale)
  @target-width = @width * @scale
  @target-height = @height * @scale

  @canvas = document.create-element('canvas')
  @canvas.width = @target-width
  @canvas.height = @target-height
  @ctx = @canvas.get-context('2d')

  @imageData = @ctx.create-image-data(@targetWidth, @targetHeight)
  @buffer = new image-buffer(@imageData)

  render-pixels.apply @

  callback @buffer.createImage!



render-pixels = ->

  console.log 'Start rendering pixels'
  console.log 'TODO: MAKE THIS ASYNC / NON BLOCKING'

  area = @targetWidth * @targetHeight
  min = 0
  max = 500
  x = 0
  y = 0

  console.log area

  for i from 0 to area by 1

    pixelIndex = (x * @sample) + ((y * @sample) * @width)
    value = @image.imageData[pixelIndex]
    v = ((value + min) / max) * 255 || 0

    #clamp
    v = 0 if v < 0
    v = 255 if v > 255 or isNaN v

    r = v
    g = v
    b = v
    a = 255

    # set the pixel, using original alpha
    @buffer.setPixel i, r, g, b, a

    if i % @targetWidth == 0
      x = 0
      y++
    else
      x++

  console.log 'Finished rendering pixels'

module.exports = render-image


