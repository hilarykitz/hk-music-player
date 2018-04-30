import React, { Component, Fragment } from 'react';
import { ArtistList } from './ArtistList';
import MusicPlayer from './MusicPlayer';
import { getTracks } from './getTracks';
import Search from '../Search';
class TrackView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [
        {
          name: 'Mariah Carey',
          image: 'https://tinyurl.com/ycceonht',
          tracks: [
            {
              title: 'Vision of Love',
              year: '1995'
            },
            {
              title: 'Fantasy',
              year: '1997'
            }
          ]
        },
        {
          name: 'Grateful Dead',
          image: 'https://tinyurl.com/y9djnxs7',
          tracks: [
            {
              title: 'Box of Rain',
              year: '1972'
            },
            {
              title: 'Scarlet Begonias',
              year: '1968'
            },
            {
              title: 'Touch of Grey',
              year: '1968'
            }
          ]
        }
      ]
    };
  }

  updateTracks = (searchQuery = '') => {
    getTracks()
      .then(res => {
        return this.setState({ tracklist: res.releases });
      })
      .catch(err => console.log('Error fetching new tracks'));
  };

  componentDidMount() {
    this.updateTracks();
  }

  render() {
    const { artists } = this.state;

    return (
      <Fragment>
        <Search updateTracks={this.updateTracks} />
        <ArtistList artists={artists} />
        <MusicPlayer />
      </Fragment>
    );
  }
}

export default TrackView;
