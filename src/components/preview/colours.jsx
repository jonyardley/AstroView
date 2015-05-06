import React from 'react';
import Color from 'color';
import ImageActions from '../../actions/imageActions';

var placeholder = document.createElement("div");
placeholder.className = "placeholder";

class Colors extends React.Component {

  constructor(props){
    super(props);
    this.state = props;
    this.state.mode = 'drag';
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
    console.log(from, to);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
    ImageActions.updateColors(this.props.image, this.state.colors);
  }

  render(){

    let colors = this.state.colors,
        colorWidth = 100 / (colors.length),
        colorDivs = colors.map(function(color, index){
          let bgColor = Color(color).hexString();
          return <div key={index} data-id={index} className="color"
            draggable="true" onDragEnd={this.dragEnd.bind(this)} onDragStart={this.dragStart.bind(this)}
            style={{background: bgColor, width: `${colorWidth}%`}} />
        }.bind(this));

    placeholder.style.width = `${colorWidth}%`;

    return(
      <div>

        <div className="colors" onDragOver={this.dragOver.bind(this)}>
          {colorDivs}
        </div>
      </div>
    )
  }

};

export default Colors;
