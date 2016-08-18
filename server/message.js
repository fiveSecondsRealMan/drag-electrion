/**
  事件监听器
**/

'use strict';

module.exports = function (ipcMain, mainWindow) {
  ipcMain.on('getAllFiles', (event, data) => {
    mainWindow.webContents.send('getAllFiles', data);
  });
};
