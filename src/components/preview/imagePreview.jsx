import React from 'react';
import ImageActions from '../../actions/imageActions';
import ScaleBar from './scaleBar.jsx';
import scaleFunctions from '../../utils/scaleFunctions';

var canvasId = 'previewCanvas',
		size = 500;

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
		this.hasScalingChanged = (this.props.image.imgRaw) ? false : true;
	}

	componentDidMount(){
		//Attach mouse up events to
		document.body.onmousedown = this.setMouseDown.bind(this);
		document.body.onmouseup = this.setMouseUp.bind(this);

		let el = document.getElementById(canvasId);
		this.ctx = el.getContext('2d');
		this.renderPreview();
	}

	componentWillUnmount(){
		document.body.onmousedown = null;
		document.body.onmouseup = null;
	}

	componentDidUpdate(prevProps){
		this.renderPreview();
		if(!this.hasScalingChanged){
			this.hasScalingChanged = true;
		}
	}

	renderPreview(){
		let scale = size / this.props.image.metaData.width;
		ImageActions.renderPreview(this.props.image, scale, function(data){
			this.ctx.putImageData(data,0,0);
		}.bind(this));
	}

	mouseMove(e){
		if(this.state.isMouseDown){

			let x = this.state.lastPosition.x,
					y = this.state.lastPosition.y,
					deltaX = e.clientX - this.state.lastPosition.x,
					deltaY = e.clientY - this.state.lastPosition.y,
					min = this.props.image.scaling.scaleMin,
					max = this.props.image.scaling.scaleMax;

			let scale = e.shiftKey ? 1 : (this.props.image.scaling.max / e.target.width);

			//adjust x
			min = min + (deltaX * scale);
			max = max + (deltaX * scale);

			//adust y
			min = min - (deltaY * scale);
			max = max + (deltaY * scale);

			this.setState({lastPosition: {x: e.clientX, y: e.clientY}});
			ImageActions.updateScaling(this.props.image, min, max);
		}
	}

	setMouseDown(e){
		if(e.target.id == canvasId){
			let lastPosition = {x:e.clientX, y: e.clientY};
			let isMouseDown = true;
			this.setState({isMouseDown, lastPosition});
		}
	}

	setMouseUp(e){
		if(this.state.isMouseDown){
			this.setState({isMouseDown: false});
		}
	}

	save(){
		if(this.hasScalingChanged){
			ImageActions.updateImage(this.props.image);
		}
		ImageActions.showPreview(null);
	}

	updateScaleFunction(value){
		let newFunction = value.target.value;
		ImageActions.updateScaleFunction(this.props.image.id, newFunction);
	}

	render(){

		let scaleOptions = scaleFunctions.values().map(function(sf, index){
			return (<option key={index}>{sf}</option>);
		});

		return (
			<div>
				<div className="overlay"></div>
				<div className="preview">
					<h2>{this.props.image.name}</h2>
					<canvas width={size} height={size} className="preview__canvas" id={canvasId}
							onMouseMove={this.mouseMove.bind(this)} />
					<ScaleBar image={this.props.image}/>
					<div>
						<select onChange={this.updateScaleFunction.bind(this)}>
							{scaleOptions}
						</select>
					</div>
					<button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Done</button>
					<button type="button" className="btn btn-danger" onClick={() => console.log('TODO: CANCEL')}>Cancel</button>
				</div>
				</div>
		);
	}

}

module.exports = ImagePreview;
