import React, { Component, Fragment } from 'react';
import { Tracklist } from './Tracklist';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTracks: false
    };
  }

  render() {
    const { image, name, tracks } = this.props.artist;
    const { showTracks } = this.state;
    return (
      <Fragment>
        <div
          className="artist"
          key={name}
          onClick={() => this.setState({ showTracks: !showTracks })}>
          <div
            className="artistIcon"
            key={name}
            style={{ backgroundImage: `url(${image})` }}
          />
          <span>{name}</span>
        </div>
        {showTracks && (
          <div className={'accordionInner'}>
            <Tracklist tracks={tracks} />
          </div>
        )}
      </Fragment>
    );
  }
}

export const ArtistList = ({ artists = [], playTrack }) => {
  return (
    <div className="artistList">
      {artists.map((artist, i) => <Artist key={i} artist={artist} />)}
    </div>
  );
};
