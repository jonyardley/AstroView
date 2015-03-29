import React from 'react';
import ImageActions from '../../actions/imageActions';
import ScaleBar from './scaleBar.jsx';

var canvasId = 'previewCanvas',
		size = 400;

class ImagePreview extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isMouseDown: false,
			lastPosition: {
				x:0,
				y:0
			},
			offset: {
				x:0,
				y:0
			}
		};
	}

	componentDidMount(){
		//Attach mouse up events to 
		document.addEventListener('mousedown', this.setMouseDown.bind(this));
		document.addEventListener('mouseup', this.setMouseUp.bind(this));

		let el = document.getElementById(canvasId);
		this.ctx = el.getContext('2d');
		this.renderPreview();
	}

	componentWillUnmount(){
		document.removeEventListener('mousedown', this.setMouseDown.bind(this));
		document.removeEventListener('mouseup', this.setMouseUp.bind(this));
	}

	componentDidUpdate(prevProps){
		this.renderPreview();
	}

	renderPreview(){
		let scale = size / this.props.image.metaData.width
		ImageActions.renderPreview(this.props.image, scale, function(data){
			this.ctx.putImageData(data.imageData,0,0);
		}.bind(this));
	}

	componentDidUpdate(){
		this.renderPreview();
	}

	mouseMove(e){
		if(this.state.isMouseDown){

			let x = this.state.lastPosition.x,
					y = this.state.lastPosition.y,
					deltaX = e.clientX - this.state.lastPosition.x,
					deltaY = e.clientY - this.state.lastPosition.y,
					min = this.props.image.scaling.scaleMin,
					max = this.props.image.scaling.scaleMax;

			//adjust x
			min = min + deltaX;
			max = max + deltaX;

			//adust y
			min = min - deltaY;
			max = max + deltaY;

			this.setState({lastPosition: {x: e.clientX, y: e.clientY}});
			ImageActions.updateScaling(this.props.image, min, max);
		}
	}

	setMouseDown(e){
		let lastPosition = {x:e.clientX, y: e.clientY};
		let isMouseDown = true;
		this.setState({isMouseDown, lastPosition});
	}

	setMouseUp(e){
		this.setState({isMouseDown: false});
	}

	render(){

		return (
			<div className="preview">
				<canvas width={size} height={size} className="preview__canvas" id={canvasId}
						onMouseMove={this.mouseMove.bind(this)} />
				<ScaleBar image={this.props.image}/>
			</div>
		);
	}

}

module.exports = ImagePreview;
