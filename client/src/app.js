/**
  入口文件
**/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import * as action from 'action';
import Main from 'components';
import { bindActionCreators } from 'redux';
import { ipcRenderer as ipc } from 'electron';

const myStore = store();

class App extends React.Component {
  render() {
    return (
      <Main state={ myStore.getState() }  { ...dispatchToProps() } />
    );
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

const dispatchToProps = () => bindActionCreators(action, myStore.dispatch);

ipc.on('stateUpdate', (error, data) => {
  initialState = data;
  render();
});

myStore.subscribe(render);

render();
