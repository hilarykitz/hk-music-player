import React, { Component } from 'react';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  render() {
    const { playing } = this.state;
    return (
      <audio controls>
        <source src="localhost:5000/music/TouchofGrey.mp3" type="audio/mp3" />
      </audio>
    );
  }
}

export default MusicPlayer;
