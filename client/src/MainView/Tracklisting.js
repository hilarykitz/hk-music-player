import React from 'react';
import { connect } from 'react-redux';
import { playTrack, pauseTrack } from '../redux/player.duck';
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled';
import MdPauseCircleFilled from 'react-icons/lib/md/pause-circle-filled';
import MdFavorite from 'react-icons/lib/md/favorite';

const trackTitle = ({ title, artist, year }) => (
  <span className="trackTitle">
    {title} - {artist} <small>({year})</small>
  </span>
);

class Tracklisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false
    };
  }

  togglePlay = (track, currentTrack) => {
    return this.props.isPlaying && currentTrack
      ? this.props.pauseTrack()
      : this.props.playTrack(track);
  };

  render() {
    const { track, currentTrack, isPlaying } = this.props;
    const { favourite } = this.state;
    const isCurrentTrack = currentTrack === track;
    return (
      <div className="track">
        <span onClick={() => this.togglePlay(track, isCurrentTrack)}>
          {isCurrentTrack && isPlaying ? (
            <MdPauseCircleFilled color="white" size={20} />
          ) : (
            <MdPlayCircleFilled color="rgba(255, 255, 255, 0.5)" size={20} />
          )}
          {trackTitle(track)}
        </span>
        <div
          className="iconRight"
          onClick={() => this.setState({ favourite: !favourite })}>
          <MdFavorite size={20} color={favourite ? '#f75757' : '#40404033'} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playTrack: track => {
      dispatch(playTrack(track));
    },
    pauseTrack: () => {
      dispatch(pauseTrack());
    }
  };
};

const mapStateToProps = ({ playerReducer }) => ({
  currentTrack: playerReducer.currentTrack,
  isPlaying: playerReducer.isPlaying
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracklisting);
