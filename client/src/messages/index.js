'use strict';

import file from './file';
import * as dataAction from 'action/data';

export default (ipc, bindActionCreators, store) => {
  const action = bindActionCreators(dataAction, store.dispatch);

  file(ipc, action);
}
