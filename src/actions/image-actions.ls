require! <[
  ../state.ls
  fitsjs
]>

window.astro = fitsjs.astro     # Hack to stop fitsjs breaking with commonjs

FITS    = fitsjs.astro.FITS
cursor  = state.select 'images'  # Image Cursor
_id     = 0                      # Keep track of last ID that was used


/**
 * Get a new ID
 * @type {Int}
 */
get-id = ->
  id = _id
  _id += 1
  return id


load-image = ->




/**
 * Actions which can be used in the application
 * @type {Object}
 */
image-actions =
  
  add-image: (opts) ->
    cursor.push do
      id: get-id!
      file: opts.file
      is-loaded: false
      img: {}
      is-dirty: true

  remove-image: (image) ->
    console.log 'remove image', cursor

  update-image: (image) ->
    console.log 'update image', cursor

module.exports = image-actions