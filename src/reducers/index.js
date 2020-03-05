import { combineReducers } from 'redux';
import { selectSong } from './../actions/index';

const songsReducer = () => {
  return [
    { id: 1, title: "No Scrubs", duration: "4:05" },
    { id: 2, title: "I Swear", duration: "4:22" },
    { id: 3, title: "Wonderwall", duration: "4:19" },
    { id: 4, title: "Good Vibrations", duration: "4:25" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedsong: selectedSongReducer
});