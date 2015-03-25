import React from 'react';
import ImageActions from '../../actions/imageActions';

var canvasId = 'previewCanvas',
		size = 400,
		defaultState = {
			scaleValue: 500
		};

class ImagePreview extends React.Component {

	constructor(props){
		super(props);
		this.state = defaultState;
	}

	resetState(){
		this.setState(defaultState);
	}

	componentDidMount(){
		let el = document.getElementById(canvasId);
		this.ctx = el.getContext('2d');
		this.renderPreview();
	}

	componentDidUpdate(prevProps){
		
		if(prevProps.image.id !== this.props.image.id){
			console.info('TODO: WORK OUT UPDATE LOGIC!');
			this.renderPreview();
		}

	}

	componentWillReceiveProps(nextProps){
		console.info('TODO: GET STATE FROM PROPS')
		this.setState(defaultState);
	}

	renderPreview(){
		let scale = size / this.props.image.metaData.width

		ImageActions.renderPreview(this.props.image, scale, this.state.scaleValue, function(data){
			this.ctx.putImageData(data.imageData,0,0);
		}.bind(this));
	}

	updateScale(value) {
		this.setState({scaleValue: value});
		this.renderPreview();
	}

	render(){

		let valueLink = {
      value: this.state.scaleValue,
      requestChange: this.updateScale.bind(this)
    };

		return (
			<div className="preview">
				<canvas width={size} height={size} className="preview__canvas" id={canvasId}></canvas>
				<input type="range" min="0" max="10000" valueLink={valueLink} />
			</div>
		);
	}

}

module.exports = ImagePreview;

/**require! react:React
require! '../../common/globalEvents.ls'

d = React.DOM

# Class
ImagePreview = React.createFactory React.createClass do

	display-name: 'ImagePreview'

	getInitialState: ->
		visible: false,
		image: null

	componentDidMount: ->
		globalEvents.on 'showPreview', @showPreview
		globalEvents.on 'hidePreview', @hidePreview
	
	componentWillUnmount: ->
		globalEvents.off 'showPreview', @showPreview
		globalEvents.off 'hidePreview', @hidePreview

	showPreview: (image) -> @setState { visible: true, image: image }

	hidePreview: -> @setState visible: false

	render: ->
		d.div null, if @state.visible
			d.div onClick: @hidePreview,
				d.div null,
					d.h2 null, 'PREVIEW'
					d.h3 null, 'image-id: ' + @state.image.id


module.exports = ImagePreview**/
