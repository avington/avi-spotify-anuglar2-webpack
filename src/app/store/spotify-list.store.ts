import {ActionReducer, Action} from '@ngrx/store';
import ex = require("lodash/extend");

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const SEARCH = 'SEARCH';
export const ALBUM = 'ALBUM';
export const ERROR = 'ERROR';

const actionFunctions: {SEARCH: ((state, action)=>any)} = {
  SEARCH: (state, action) => {
    const payload = ex({}, action.payload);
    return payload;
  },
  ALBUM: (state, action) => {
    const payload = ex({}, action.payload);
    return payload;
  }
};

export const searchListReducer: ActionReducer<any[]> = (state: any = [], action: Action) => {
  if (action.type && actionFunctions[action.type]) {
    return actionFunctions[action.type](state, action);
  } else {
    return state;
  }
};
