/**
  事件监听器
**/

'use strict';

var request = require('request');
var fs = require('fs');

// const host = '192.168.5.140';
// const url = 'http://' + host + '/files';
// const userType = 'JWT';
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiNzdjNmFiZTQtZjdjZC00NmIzLTgwYzctZmYwOGFhMzc3NDJlIn0.EE2KG9quGAK0Db-P60ok3Pq-Q_btAyfXl018vIloYAk';


// const getAllFiles = () => {
//   const options = {
//     method: 'GET',
//     url: url,
//     headers: {
//       Authorization: userType + ' ' + token
//     }
//   };
//
//   return new Promise((resolve, reject) => {
//     request(options, (err, res, body) => {
//       if (err)
//         return reject(err);
//
//       resolve(JSON.parse(body));
//     });
//   });
// };

const getAllFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./mock.json', 'utf8', (err, data) => {
      if (err)
        return reject(err);

      return resolve(JSON.parse(data));
    });
  });
}

module.exports = function (ipcMain) {
  ipcMain.on('getAllFiles', event => {
    getAllFiles()
      .then(data => event.sender.send('getAllFiles', data))
      .catch(err => event.sender.send('getAllFiles', err));
  });
};
