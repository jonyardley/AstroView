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

class Colors extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      colors: props.colors,
      colorValue: '#FFFFFF',
      selectedIndex: null
    };
  }

  dragStart(e){
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
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
    this.setState({data: data});
    ImageActions.updateColors(this.props.image, this.state.colors);
  }

  add(){
    console.log('TODO: ADD');
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
    console.log('TODO: Save')
  }

  updateSelectedColorValue(value){
    this.setState({colorValue: value});
  }

  cancel(){
    console.log('TODO: RESTORE INITIAL VALUES')
    this.props.close();
  }

  render(){

    let colors = this.state.colors,
        colorWidth = 100 / (colors.length),
        colorDivs = colors.map(function(color, index){
          let bgColor = Color(color).hexString();
          return <div key={index} data-id={index} className="color"
            draggable="true" onDragEnd={this.dragEnd.bind(this)} onDragStart={this.dragStart.bind(this)}
            onClick={this.edit.bind(this, index)}
            style={{background: bgColor, width: `${colorWidth}%`}} />
        }.bind(this));

    placeholder.style.width = `${colorWidth}%`;

    let presetDivs = presets.map(function(color, index){
      return <div className="color-preset" style={{background: color}} key={index} onClick={this.updateSelectedColorValue.bind(this, color)} />
    }.bind(this));

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
          </div>
          <button type="button" className="btn btn-secondary" onClick={this.add.bind(this)}>Add</button>
          <button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Save</button>
          <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
        </div>
      </div>
    )
  }

};

export default Colors;
