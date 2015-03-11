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
	newImage = id: id-keep
	Images.push newImage
	newImage

deleteImage = (index) ->
	console.log 'DELETE IMAGE'


# Create Image Store
ImageStore = assign {}, EventEmitter.prototype, do
	
	getAll: -> Images
	getById: -> find (.id), Images

	emitChange: -> 
		@emit 'change'

	addChangeListener: (cb) -> @on 'change', cb
	removeChangeListener: (cb) -> @on 'change', cb
	
	dispatcherIndex: AppDispatcher.register (payload) ->

		switch payload.actionType

			case constants.IMAGE_CREATE
				createImage payload.data
				ImageStore.emitChange!

			case constants.IMAGE_DELETE
				deleteImage payload.data
				ImageStore.emitChange!


module.exports = ImageStore
