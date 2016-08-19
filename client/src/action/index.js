/**
  action
**/

'use strict';

import * as actionTypes from 'constants/actionTypes';

export const getAllFile = (data) => ({
  type: actionTypes.GET_ALL_FILE,
  data
})

export const dragSingleFile = (draged) => ({
  type: actionTypes.DRAG_SINGLE_FILE,
  draged
});

export const dragFolder = (draged) => ({
  type: actionTypes.DRAG_FOLDER,
  draged
});
