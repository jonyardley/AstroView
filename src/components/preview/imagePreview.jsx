import React from 'react';
import ImageActions from '../../actions/imageActions';
import ScaleBar from './scaleBar.jsx';

var canvasId = 'previewCanvas',
		size = 400;

class ImagePreview extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		let el = document.getElementById(canvasId);
		this.ctx = el.getContext('2d');
		this.renderPreview();
	}

	componentDidUpdate(prevProps){
		console.info('TODO: WORK OUT UPDATE LOGIC!');
		this.renderPreview();
	}

	renderPreview(){
		let scale = size / this.props.image.metaData.width
		ImageActions.renderPreview(this.props.image, scale, function(data){
			this.ctx.putImageData(data.imageData,0,0);
		}.bind(this));
	}

	render(){

		return (
			<div className="preview">
				<canvas width={size} height={size} className="preview__canvas" id={canvasId}></canvas>
				<ScaleBar image={this.props.image}/>
			</div>
		);
	}

}

/**
 * 
 * <input type="range" min="0" max="10000" valueLink={valueLink} />
 */

module.exports = ImagePreview;
