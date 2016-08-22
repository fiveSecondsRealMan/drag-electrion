'use strict';

import React from 'react';
import File from './File';

export default class Main extends React.Component {
  render() {
    const { files } = this.props.state;

    return (
      <File files={ files } />
    );
  }
}
