'use strict';

import React from 'react';
import FileItem from './FileItem';
import './file.css';

export default class File extends React.Component {
  render() {
    const { files } = this.props;

    return (
      <ul className="file">
        { files.map(file => <FileItem file={ file } />) }
      </ul>
    );
  }
}
