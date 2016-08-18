/**
  interactive action
**/

'use strict';

import * as interactiveActionTypes from 'constants/interactiveActionTypes';

export const dragSingleFile = (draged) => ({
  type: interactiveActionTypes.DRAG_SINGLE_FILE,
  draged
});

export const dragFolder = (draged) => ({
  type: interactiveActionTypes.DRAG_FOLDER,
  draged
});
