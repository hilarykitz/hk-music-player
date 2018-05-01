import React from 'react';
import Tracklisting from './Tracklisting';

export const Tracklist = ({ tracks = [], playTrack }) => (
  <div className="tracklist">
    {tracks.map((track, i) => {
      return <Tracklisting key={i} track={track} playTrack={playTrack} />;
    })}
  </div>
);
