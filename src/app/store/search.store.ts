import {ActionReducer, Action} from '@ngrx/store';
import ex = require("lodash/extend");


export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export interface ISpotifySearch {
  query: string;
  filter: string;
}
;

const initialState: ISpotifySearch = {
  query: '',
  filter: ''
};

const actionFunctions = {
  UPDATE_QUERY: (state: ISpotifySearch = initialState, action: Action) => {
    return ex({}, state, action.payload);
  }
};


export const search: ActionReducer<ISpotifySearch> = (state: ISpotifySearch = initialState, action: Action) => {

  if (action.type && actionFunctions[action.type]) {
    return actionFunctions[action.type]
  } else {
    return state;
  }
};

