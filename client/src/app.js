/**
  入口文件
**/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { ipcRenderer as ipc } from 'electron';

// require css
import 'styles/reset';
import 'styles/component';

// 创建redux store
import createStore from 'store';

// 交互 action
import * as interactiveAction from 'action/interactive';

// 监听electron消息
import message from 'messages';

// 组件入口
import Main from 'components';

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
