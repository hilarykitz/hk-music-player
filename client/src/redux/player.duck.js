import { defaultArtists } from './defaultArtists';
// action types
export const PLAY_TRACK = () => `egg/PLAY_TRACK`;
export const PAUSE_TRACK = () => `egg/PAUSE_TRACK`;
export const STOP_TRACK = () => `egg/STOP_TRACK`;

// action creators
export const playTrack = track => ({
  type: PLAY_TRACK,
  payload: track
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});

export const stopTrack = () => ({
  type: STOP_TRACK
});

export const initialState = {
  isPlaying: false,
  currentTrack: '',
  artists: defaultArtists
};

// reducer
const playerReducer = (state = initialState, action) => {
  const { type } = action;
  // if (type === PAUSE_TRACK || type === PLAY_TRACK) {
  //   debugger;
  // }

  switch (type) {
    case PLAY_TRACK: {
      const { payload } = action;
      return { ...state, currentTrack: payload, isPlaying: true };
    }
    case PAUSE_TRACK: {
      return { ...state, isPlaying: false };
    }
    case STOP_TRACK: {
      return { ...state, currentTrack: '', isPlaying: false };
    }
    default:
      return state;
  }
};

export default playerReducer;
