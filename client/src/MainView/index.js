import React, { Component, Fragment } from 'react';
import { ArtistList } from './ArtistList';
import MusicPlayer from './MusicPlayer';
import { getTracks } from './getTracks';
import Search from '../Search';

const defaultArtists = [
  {
    name: 'Mariah Carey',
    image: 'https://tinyurl.com/ycceonht',
    tracks: [
      {
        title: 'Army Dreamers',
        year: '1995',
        src: 'ArmyDreamers'
      },
      {
        title: 'Among Dreams',
        year: '1997',
        src: 'AmongDreams'
      }
    ]
  },
  {
    name: 'Grateful Dead',
    image: 'https://tinyurl.com/y9djnxs7',
    tracks: [
      {
        title: 'America',
        year: '1972',
        src: 'America'
      },
      {
        title: 'Abandoned Love',
        year: '1968',
        src: 'AbandonedLove'
      },
      {
        title: 'Ashes of American Flags',
        year: '1968',
        src: 'AshesofAmericanFlags'
      }
    ]
  }
];

class TrackView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: defaultArtists,
      currentSong: defaultArtists[0].tracks[0]
    };
  }

  updateTracks = (searchQuery = '') => {
    getTracks()
      .then(res => {
        return this.setState({ tracklist: res.releases });
      })
      .catch(err => console.log('Error fetching new tracks'));
  };

  playTrack = track => {
    this.setState({ currentSong: track });
  };

  componentDidMount() {
    this.updateTracks();
  }

  render() {
    const { artists, currentSong } = this.state;

    return (
      <Fragment>
        <Search updateTracks={this.updateTracks} />
        <ArtistList artists={artists} playTrack={this.playTrack} />
        <MusicPlayer artists={artists} currentSong={currentSong} />
      </Fragment>
    );
  }
}

export default TrackView;
