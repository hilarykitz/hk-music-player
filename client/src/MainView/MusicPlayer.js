import React, { Component } from 'react';
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled';
import MdPause from 'react-icons/lib/md/pause';
import MdStop from 'react-icons/lib/md/stop';

const makeTimestamp = seconds => {
  var minutes = Math.floor(seconds / 60);
  var seconds = (seconds % 60).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

class MusicPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: null,
      playing: false,
      currentSong: props.currentSong
    };
  }

  playAudio = () => {
    this.audio.play();
    this.setState({ playing: true });
  };

  pauseAudio = () => {
    this.audio.pause();
    this.setState({ playing: false });
  };

  stopAudio = () => {
    this.audio.currentTime = 0;
    this.slider.value = 0;
    this.audio.pause();
    clearInterval(this.currentTimeInterval);
    this.setState({ playing: false });
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSong !== this.state.currentSong) {
      this.stopAudio();
      this.setState({ currentSong: nextProps.currentSong }, () => {
        this.playAudio();
      });
    }
  }

  render() {
    const { duration, playing, currentSong } = this.state;
    const { src, title } = currentSong;
    const songSrc = `http://localhost:5000/songs?song=${src}`;

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
          <MdPause
            opacity={playing ? 1 : 0.5}
            size={34}
            onClick={this.pauseAudio}
          />
          <MdPlayCircleFilled
            opacity={playing ? 0.5 : 1}
            onClick={this.playAudio}
            size={40}
          />
          <MdStop
            opacity={playing ? 1 : 0.5}
            size={40}
            onClick={this.stopAudio}
          />
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
