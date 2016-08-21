'use strict';

import React from 'react';

export default class FileItem extends React.Component {
  render() {
    const { file } = this.props;

    return (
      <li className="file-item">
        <div className="left">
          <span className="checkbox"></span>
          <span className="fileicon { file.type==='folder' ? 'folder-fileicon' : 'text-fileicon' }"></span>
          <span className="filename">{ file.attributes.name }</span>
        </div>
        <div className="center">
          <span className="filesize">{ file.attributes.size }</span>
        </div>
        <div className="right">{ file.attributes }</div>
      </li>
    );
  }
}
