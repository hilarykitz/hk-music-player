import React from 'react';
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled';
import MdPauseCircleFilled from 'react-icons/lib/md/pause-circle-filled';
import MdFavorite from 'react-icons/lib/md/favorite';

class Tracklisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      playing: false
    };
  }

  render() {
    const { track, playTrack } = this.props;
    const { favourite, playing } = this.state;
    const { title, artist, year } = track;

    return (
      <div className="track">
        <span
          onClick={() => (
            playTrack(track), this.setState({ playing: !playing })
          )}>
          {playing ? (
            <MdPauseCircleFilled color="white" size={20} />
          ) : (
            <MdPlayCircleFilled color="rgba(255, 255, 255, 0.5)" size={20} />
          )}

          <span className="trackTitle">
            {title} - {artist} <small>({year})</small>
          </span>
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

export default Tracklisting;
