import { ActionReducer, Action } from '@ngrx/store';
import ex = require("lodash/extend");

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const SEARCH = 'SEARCH';
export const ALBUM = 'ALBUM';
export const ARTIST = 'ARTIST';
export const FEATURED_PLAYLISTS = 'FEATURED_PLAYLISTS';
export const ERROR = 'ERROR';
export const CATEGORIES = 'CATEGORIES';

export interface IActionFunctions {
  SEARCH: ((state, action) => any);
  ALBUM: ((state, action) => any);
  ARTIST: ((state, action) => any);
  FEATURED_PLAYLISTS: ((state, action) => any);
  CATEGORIES: ((state, action) => any);

}

const actionFunctions: IActionFunctions = {
  SEARCH: (state, action) => {
    const payload = ex({}, action.payload);
    return payload;

  },
  ALBUM: (state, action) => {
    const payload = ex({}, action.payload);
    return payload;
  },
  FEATURED_PLAYLISTS: (state, action) => {
    const payload = ex({}, action.payload);
    return payload;
  },
  CATEGORIES: (state, action) => {
    const payload = ex({}, action.payload);
    return payload;
  },
  ARTIST: (state, action) => {
    const artist = ex({}, {
      info: action.payload[0],
      albums: action.payload[1],
      topSongs: {
        total: action.payload[2].tracks.length,
        items: action.payload[2].tracks
      }
    });
    return artist;
  }
};

export const searchListReducer: ActionReducer<any[]> = (state: any = [], action: Action) => {
  if (action.type && actionFunctions[action.type]) {
    return actionFunctions[action.type](state, action);
  } else {
    return state;
  }
};
