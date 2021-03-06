/**
  入口文件
**/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'store';
import Main from 'components';
import { bindActionCreators } from 'redux';
import { ipcRenderer as ipc } from 'electron';
import * as interactiveAction from 'action/interactive';
import message from 'messages';

import 'styles/reset';
import 'styles/component'

const myStore = createStore();
const combineInteractiveActionAndDispatch = bindActionCreators(interactiveAction, myStore.dispatch);

class App extends React.Component {
  render() {
    return (
      <Main state={ myStore.getState() } { ...combineInteractiveActionAndDispatch } />
    );
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

myStore.subscribe(render);

render();

// 接收和发送消息给electron桌面程序
message(ipc, bindActionCreators, myStore);
