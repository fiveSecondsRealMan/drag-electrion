/**
  data action
**/

'use strict';

import * as dataActionTypes from 'constants/dataActionTypes';

export const getAllFile = (files) => ({
  type: dataActionTypes.GET_ALL_FILE,
  files
})
