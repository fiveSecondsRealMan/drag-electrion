/**
  接收和发送给electron桌面程序 file 消息
**/

'use strict';

export default (ipc, action) => {
  ipc.on('getAllFiles', (error, data) => {
    // 获取所有文件
    action.getAllFile(data);
    console.log(data);
  });
  ipc.send("getAllFiles", 'wjjj');
}
