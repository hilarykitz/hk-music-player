import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playTrack, pauseTrack, stopTrack } from '../redux/player.duck';
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled';
import MdFastRewind from 'react-icons/lib/md/fast-rewind';
import MdPause from 'react-icons/lib/md/pause';
import MdStop from 'react-icons/lib/md/stop';

const makeTimestamp = (secs = 0) => {
  if (!secs) {
    return '0:00';
  }
  var minutes = Math.floor(secs / 60);
  var seconds = (secs % 60).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

class MusicPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: null
    };
  }

  playAudio = currentTrack => {
    this.audio.play();
  };

  pauseAudio = () => {
    this.audio && this.audio.pause();
  };

  resetAudio = () => {
    this.audio.currentTime = 0;
    this.slider.value = 0;
    clearInterval(this.currentTimeInterval);
  };

  stopAudio = () => {
    this.audio.pause();
    this.props.stopTrack();
    this.resetAudio();
  };

  componentDidMount() {
    this.slider.value = 0;
    this.currentTimeInterval = null;
    this.audio.onloadedmetadata = function() {
      this.setState({ duration: this.audio.duration });
    }.bind(this);

    this.audio.onplay = () => {
      this.currentTimeInterval = setInterval(() => {
        this.slider.value = this.audio.currentTime;
        this.timeLeft.value = `${makeTimestamp(
          this.audio.duration - this.audio.currentTime
        )} / ${makeTimestamp(this.audio.duration)}`;
      }, 200);
    };

    this.slider.onchange = e => {
      clearInterval(this.currentTimeInterval);
      this.audio.currentTime = e.target.value;
      this.timeLeft.value = `${makeTimestamp(
        this.audio.duration - this.audio.currentTime
      )} / ${makeTimestamp(this.audio.duration)}`;
    };
  }

  componentWillUnmount() {
    clearInterval(this.currentTimeInterval);
  }

  render() {
    const { duration } = this.state;
    const { currentTrack, isPlaying, pauseTrack, playTrack } = this.props;
    const { src, title } = currentTrack;
    const shouldPlay = isPlaying && src;
    const songSrc = `http://localhost:5000/songs?song=${src}`;

    if (shouldPlay) {
      this.playAudio(currentTrack);
    }
    if (!isPlaying) {
      this.pauseAudio();
    }

    return (
      <div className="musicPlayer">
        <h3 className="nowPlaying">{title}</h3>
        <audio
          ref={audio => {
            this.audio = audio;
          }}
          src={songSrc}
        />
        <p style={{ margin: 0 }}>
          <input
            className="timeLeft"
            ref={timeLeft => {
              this.timeLeft = timeLeft;
            }}
            value=""
          />
        </p>
        <div>
          <input
            className="slider"
            style={{ opacity: shouldPlay ? '1' : '0.5' }}
            ref={slider => {
              this.slider = slider;
            }}
            type="range"
            name="points"
            min="0"
            max={duration}
          />
        </div>
        <div>
          <MdFastRewind
            opacity={src ? 1 : 0.5}
            size={34}
            onClick={this.resetAudio}
          />

          <MdPause
            opacity={isPlaying ? 1 : 0.5}
            size={34}
            onClick={() => pauseTrack()}
          />

          <MdPlayCircleFilled
            opacity={isPlaying || !src ? 0.5 : 1}
            onClick={() => playTrack(currentTrack)}
            size={40}
          />

          <MdStop
            opacity={isPlaying ? 1 : 0.5}
            size={40}
            onClick={this.stopAudio}
          />
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
    },
    stopTrack: () => {
      dispatch(stopTrack());
    }
  };
};

const mapStateToProps = ({ playerReducer }) => ({
  currentTrack: playerReducer.currentTrack,
  isPlaying: playerReducer.isPlaying
});
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
