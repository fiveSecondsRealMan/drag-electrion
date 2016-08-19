/**
  data action
**/

'use strict';

import * as dataActionTypes from 'constants/dataActionTypes';

export const getAllFile = (file) => ({
  type: dataActionTypes.GET_ALL_FILE,
  file
})
