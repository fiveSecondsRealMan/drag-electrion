/**
  electron入口文件
**/

'use strict';

import path from 'path';
import electron from 'electron';

// 定义
// 控制生命周期模块 app
// 创建浏览器窗口模块 BrowserWindow
const { app, BrowserWindow } = electron;

const windowConfig = {
  width: 800,
  height: 600
};

// 定义指向主浏览窗口的变量，避免被GC
let mainWindow;

// 根据环境得到对应的web应用的首页地址
function getWebPageURLByEnv () {
  const isDevEnv = process.env.NODE_ENV === 'dev';

  return isDevEnv ? 'http://localhost:8080/index.html' : path.join(__dirname, '..', 'dist', 'index.html');
}

// 创建浏览器窗口
function createWindow () {
  mainWindow = new BrowserWindow(windowConfig);
  mainWindow.loadURL();
}
