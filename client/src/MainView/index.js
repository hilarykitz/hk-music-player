import React, { Component, Fragment } from 'react';
import ArtistList from './ArtistList';
import MusicPlayer from './MusicPlayer';
import Search from '../Search';

class TrackView extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <ArtistList />
        <MusicPlayer />
      </Fragment>
    );
  }
}

export default TrackView;
