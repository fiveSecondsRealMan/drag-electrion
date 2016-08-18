/**
  事件监听器
**/

'use strict';

export default ipcMain => {
  ipcMain.on('getAllFiles', (event, ...args) => {
    console.log(...args);
  });
}
