import React, { Component } from 'react';

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false,
      isPlaying: false,
      isSelected: false,
    }
  }

  handleClick() {
    if (!this.state.isSelected) {
      this.setState({
        isPlaying: true,
        isSelected: true,
      });
    } else if (this.state.isSelected && this.state.isPlaying) {
      console.log("pause");
      this.setState({ isPlaying: false });
    } else if (this.state.isSelected && !this.state.isPlaying) {
      console.log("play");
      this.setState({ isPlaying: true });
    }
  }

  mouseEnter() {
    this.setState({ isMouseInside: true });
  }

  mouseLeave() {
    this.setState({ isMouseInside: false });
  }

  firstColumn() {
    if (this.state.isMouseInside && !this.state.isPlaying) {
      return (
        <span className="ion-md-play"></span>
      );
    } else if (this.state.isSelected && !this.state.isPlaying) {
      return(
        <span className="ion-md-play"></span>
      );
    } else if (this.state.isSelected && this.state.isPlaying) {
      return(
        <span className="ion-md-pause"></span>
      );
    } else {
      return(this.props.index + 1);
    }
  }


  render (){
    return (
      <tr onClick={() => {this.handleClick(); this.props.onClick()}} onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()} >
        <td>{this.firstColumn()}</td>
        <td>{this.props.title}</td>
        <td>{this.props.duration}</td>
      </tr>

    )
  }
}

export default Song;
