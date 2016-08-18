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

let mocking = false;
let initialState = {};
const myStore = store();

class App extends React.Component {
  render() {
    return (
      <Main state={ mocking ? initialState : mockingmyStore.getState() }  { ...dispatchToProps() } />
    );
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

const dispatchToProps = () => bindActionCreators(action, myStore.dispatch);

ipc.on('stateUpdate', (error, data) => {
  mocking = true;
  initialState = data;
  render();
});

myStore.subscribe(render);

render();
