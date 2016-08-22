/**
  electron入口文件
**/

'use strict';

const path = require('path');
const electron = require('electron');
const message = require('./message');

// 定义
// 控制生命周期模块 app
// 创建浏览器窗口模块 BrowserWindow
// 主线程向渲染线程发送和接收消息的模块 ipcMain
const { app, BrowserWindow, ipcMain, Tray, Menu } = electron;

const windowConfig = {
  width: 1365,
  height: 980,
  icon: './icon.png',
  title: 'my first electron application'
};

const isDevEnv = process.env.NODE_ENV === 'dev';

// 定义指向主浏览窗口的变量，避免被GC
let mainWindow;

// 根据环境得到对应的web应用的首页地址
function getWebPageURLByEnv (isDevEnv) {
  return isDevEnv ?
    'http://localhost:8080/index.html' :
    path.join(__dirname, '..', 'dist', 'index.html');
}

// 创建主窗口
function createWindow () {
  const webPageURL = getWebPageURLByEnv(isDevEnv);
  const appIcon = new Tray('./icon.png');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'A', type: 'radio' },
    { label: 'B', type: 'radio' },
    { label: 'C', type: 'radio' }
  ]);

  appIcon.on('click', (a, b, c) => {
    mainWindow.isMinimized() && mainWindow.restore();
  });
  appIcon.setToolTip('this is my application');
  appIcon.setContextMenu(contextMenu);

  mainWindow = new BrowserWindow(windowConfig);

  mainWindow.loadURL(webPageURL);

  isDevEnv && mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 监听渲染线程事件
  message(ipcMain);
}

app.on('ready', createWindow);
