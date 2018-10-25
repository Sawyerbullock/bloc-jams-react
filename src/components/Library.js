import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="row navbar library">
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} className="col-md-6 album-link" key={index}>
              <div className="view overlay zoom">
                <img src={album.albumCover} className="img-fluid" alt={album.title} />
                <div className="mask flex-center">
                  <p class="white-text">{album.title}</p>
                </div>
              </div>
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
