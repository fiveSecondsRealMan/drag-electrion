'use strict';

import {
  GET_ALL_FILE,
  DRAG_SINGLE_FILE,
  DRAG_FOLDER
} from 'constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_FILE:
      return Object.assign({}, state, { data: action.data });
    case DRAG_SINGLE_FILE:
      return Object.assign({}, state, { draged: action.draged });
    case DRAG_FOLDER:
      return Object.assign({}, state, { draged: action.draged });
    default:
      return state;  
  }
}
