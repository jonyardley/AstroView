require! <[
	react
	../../state.ls
	../add-image/add-image.ls
	../image-thumb/image-thumb.ls
]>

d = react.DOM

sidebar = react.create-factory react.create-class do

	display-name: 'sidebar'
	mixins: [state.mixin]
	cursors: {
		images: 'images',
		max-images: 'max-images'
	}

	render: ->

		images = this.cursors.images.get!
		max-images = this.cursors.max-images.get!

		d.div class-name: 'sidebar',
			d.div class-name: 'sidebar__logo'
			images.map (img) ->
				image-thumb image: img, key: img.id
			if images.length < max-images
				add-image type: 'sidebar', label: ''


module.exports = sidebar