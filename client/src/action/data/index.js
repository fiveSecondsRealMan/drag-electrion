/**
  data action
**/

'use strict';

import * as dataActionTypes from 'constants/dataActionTypes';

export const getAllFile = (data) => ({
  type: dataActionTypes.GET_ALL_FILE,
  data
})
