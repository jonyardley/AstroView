require! <[
	../constants/constants.ls
	../dispatcher/AppDispatcher.ls
]>

console.log AppDispatcher

ImageActions =

	createImage: (data) -> AppDispatcher.dispatch do
		actionType: constants.IMAGE_CREATE
		data: data


	deleteImage: (index) -> AppDispatcher.dispatch do
		actionType: constants.IMAGE_DELETE
		data: index

module.exports = ImageActions