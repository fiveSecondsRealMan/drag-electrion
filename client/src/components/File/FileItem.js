'use strict';

import React from 'react';

export default class FileItem extends React.Component {
  render() {
    const { type, attributes } = this.props.file;
    const fileiconClassName = 'fileicon ' + (type === 'folder' ? 'folder-fileicon' : 'text-fileicon');

    return (
      <li className="file-item">
        <div className="left">
          <span className="checkbox"></span>
          <span className={ fileiconClassName }></span>
          <span className="filename">{ attributes.name }</span>
        </div>
        <div className="center">
          <span className="filesize">{ attributes.size }</span>
        </div>
        <div className="right">{ attributes.ctime }</div>
      </li>
    );
  }
}
