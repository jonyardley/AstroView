require! <[
  ../state.ls
  ../utils/load-image.ls
  ../utils/render-image.ls
]>

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


# Default Image Class
class Image
   ->
    @id = get-id!
    @is-loaded = false
    @is-dirty = true


image-loaded = (data) ->
  image = cursor.select id: @id
  image.merge data
  new render-image image.get!, 1, image-rendered.bind @


image-rendered = (data) ->
  image = cursor.select id: @id
  image.merge do
    img-raw: data
    is-dirty: false


/**
 * Actions which can be used in the application
 * @type {Object}
 */
image-actions =

  add-image: (file) ->
    new-image = new Image
    cursor.push new-image

    load-image file, image-loaded.bind new-image


  remove-image: (image) ->
    console.log 'remove image', cursor


  update-image: (image) ->
    console.log 'update image', cursor



module.exports = image-actions

# dev
image-path = '/fits/656nmos.fits'
image-actions.add-image image-path
