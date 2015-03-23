require! <[
  fitsjs
]>

window.astro  = fitsjs.astro          # Hack to stop fitsjs breaking with commonjs
FITS          = fitsjs.astro.FITS     # Assign FITS

module.exports = (file, callback) ->

  output = {}

  get-image-data = (image-data) ->
    output.image-data = image-data
    output.is-loaded = true
    callback output

  on-load = (fits) ->
    if fits.hdus.length > 0

      meta-data = fits.getDataUnit!

      output.metaData = meta-data
      output.header = fits.getHeader!

      #Assumes that each image only has one frame!
      meta-data.get-frame 0, get-image-data;

  fits = new FITS file, on-load
