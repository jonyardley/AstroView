require! <[
	../constants/constants.ls
	../dispatcher/AppDispatcher.ls
]>

ImageActions =

	createImage: (data) -> AppDispatcher.dispatch do
		actionType: constants.IMAGE_CREATE
		data: data


	deleteImage: (index) -> AppDispatcher.dispatch do
		actionType: constants.IMAGE_DELETE
		data: index


	updateImage: (image) -> AppDispatcher.dispatch do
		actionType: constants.IMAGE_UPDATE
		data: image


module.exports = ImageActions