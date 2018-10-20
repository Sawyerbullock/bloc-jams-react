import React, { Component } from 'react';

class Song extends Component {
  render (){
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.title}</td>
        <td>{this.props.duration}</td>
      </tr>

    )
  }
}

export default Song;
