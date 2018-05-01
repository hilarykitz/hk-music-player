import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Tracklist } from './Tracklist';

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTracks: false
    };
  }

  render() {
    const { artist } = this.props;
    const { image, name, tracks } = artist;
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

const ArtistList = ({ artists = [] }) => (
  <div className="artistList">
    {artists.map((artist, i) => <Artist key={i} artist={artist} />)}
  </div>
);

const mapStateToProps = ({ playerReducer }) => ({
  artists: playerReducer.artists
});
export default connect(mapStateToProps, null)(ArtistList);
