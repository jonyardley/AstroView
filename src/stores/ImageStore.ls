require! events: {EventEmitter}
require! 'object-assign':assign
require! <[
	../dispatcher/AppDispatcher.ls
	../constants/constants.ls
	../actions/ImageActions.ls
]>

# Private Variables
id-keep = 0
Images = []


# Store Methods
createImage = (opts) ->
	id-keep++
	newImage = do
		id: id-keep
		isRendered: false
	Images.push newImage
	renderImage newImage
	newImage

deleteImage = (image) ->
	index = Images.indexOf image
	Images.splice index, 1

renderImage = (image) ->
	console.log 'RENDER IMAGE'
	
	setTimeout ->
		image.isRendered = true
		console.log 'IMAGE IS RENDERED!'
		ImageStore.emitChange!
	, 1000



# Create Image Store
ImageStore = assign {}, EventEmitter.prototype, do

	emitChange: -> @emit 'change'
	addChangeListener: (cb) -> @on 'change', cb
	removeChangeListener: (cb) -> @on 'change', cb

	getAll: -> Images
	getById: -> find (.id), Images
	
	dispatcherIndex: AppDispatcher.register (payload) ->

		switch payload.actionType

			case constants.IMAGE_CREATE
				newImage = createImage payload.data
				ImageStore.emitChange!

			case constants.IMAGE_DELETE
				deleteImage payload.data
				ImageStore.emitChange!

			case constants.IMAGE_UPDATE
				console.log('UPDATE THIS IMAGE', payload)
				ImageStore.emitChange!


module.exports = ImageStore
