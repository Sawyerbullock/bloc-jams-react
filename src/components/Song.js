import React, { Component } from 'react';

class Song extends Component {
  render (){
    return (
      <tr onClick={ () => this.props.onClick() } >
        <td>{this.props.index + 1}</td>
        <td>{this.props.title}</td>
        <td>{this.props.duration}</td>
      </tr>

    )
  }
}

export default Song;
