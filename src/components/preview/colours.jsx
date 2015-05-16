import React from 'react';
import Color from 'color';
import ImageActions from '../../actions/imageActions';
import ColorPicker from 'react-color-picker';

var placeholder = document.createElement("div");
placeholder.className = "placeholder";

const presets = [
  '#FFFFFF',
  '#000000',
  '#FF0000',
  '#00FF00',
  '#0000FF'
]

const presetGradients = {
  Grey: ['#000000', '#FFFFFF'],
  Red: ['#000000', '#FF0000'],
  Green: ['#000000', '#00FF00'],
  Blue: ['#000000', '#0000FF'],
  Heat: ['#000000', 'orange', 'yellow', '#FFFFFF']
}

class Colors extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      colors: Object.assign([], props.colors),
      colorValue: '#FFFFFF',
      selectedIndex: 0
    };
  }

  dragStart(e){
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  dragOver(e){
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  }

  dragEnd(e){
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);
    // Update data
    var data = this.state.colors;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({
      data: data,
      selectedIndex: to
    });
  }

  add(){
    let colors = Object.assign([], this.state.colors);
    colors.push(this.state.colorValue);
    this.setState({
      colors: colors,
      selectedIndex: colors.length - 1
    });
  }

  edit(index){
    this.setState({
      selectedIndex: index,
      colorValue: this.state.colors[index]
    });
  }

  remove(index){
    this.setState({images: this.state.colors.splice(index, 1)});
    ImageActions.updateColors(this.props.image, this.state.colors);
  }

  colorPickerDrag(e){
    console.log('TODO: update state');
  }

  save(){
    ImageActions.updateColors(this.props.image, this.state.colors);
    this.props.close();
  }

  updateSelectedColorValue(value){
    let colors = Object.assign([], this.state.colors);
    if(this.state.selectedIndex > -1){
      colors[this.state.selectedIndex] = value;
    }
    this.setState({
      colorValue: value,
      colors: colors
    });
  }

  renderColor(color, index){
    let bgColor = Color(color).hexString();
    let active = this.state.selectedIndex == index ? 'active' : false,
        remove;
    if(active && this.state.colors.length > 2){
      remove = <div className="remove" onClick={this.remove.bind(this)}>x</div>
    }
    return (
      <div key={index} data-id={index} className={"color " + active}
        draggable="true" onDragEnd={this.dragEnd.bind(this)} onDragStart={this.dragStart.bind(this)}
        onClick={this.edit.bind(this, index)}
        style={{background: bgColor, width: `${this.colorWidth}%`}}>{remove}</div>
    )
  }

  renderPreset(color, index){
    return (
      <div className="color-preset"
          style={{background: color}} key={index}
          onClick={this.updateSelectedColorValue.bind(this, color)} />
    )
  }

  setPresetGradient(e){
    let colors = presetGradients[e.target.value];
    this.setState({colors: colors});
  }

  render(){

    this.colorWidth = 100 / (this.state.colors.length);
    let colorDivs = this.state.colors.map(this.renderColor.bind(this));

    placeholder.style.width = `${this.colorWidth}%`;

    let presetDivs = presets.map(this.renderPreset.bind(this));

    let gradientPresetOptions = Object.keys(presetGradients).map(function(key, index){
			return (<option key={index}>{key}</option>);
		});

    return(
      <div className="colors-panel">
        <div className="colors-overlay"></div>
        <div className="colors-inner">
          <h2>Edit Colors</h2>
          <p>Click on a colour to edit, drag to re-arrange.</p>
          <div className="colors" onDragOver={this.dragOver.bind(this)}>
            {colorDivs}
          </div>
          <div className="color-picker-wrapper">
            <ColorPicker value={this.state.colorValue} onDrag={this.updateSelectedColorValue.bind(this)}/>
            <div className="presets">
              <p>Presets</p>
              {presetDivs}
            </div>
            <select className="form-control" onChange={this.setPresetGradient.bind(this)}>
							{gradientPresetOptions}
						</select>
          </div>
          <div className="buttons">
            <button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Save</button>
            <button type="button" className="btn btn-danger" onClick={this.props.close}>Cancel</button>
            <button type="button" className="btn btn-secondary" onClick={this.add.bind(this)}>Add</button>
          </div>
        </div>
      </div>
    )
  }

};

export default Colors;
