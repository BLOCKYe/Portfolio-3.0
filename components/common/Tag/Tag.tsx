/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 24.04.2022
 * Time: 11:51
 */

import React, { Component } from 'react';

interface ITag {
  text: string;
}

class Tag extends Component<ITag, any> {
  render() {
    return (
      <div
        className={
          'text-xs bg-justDark-black p-1 px-2 rounded text-justWhite-dark'
        }>
        {this.props.text}
      </div>
    );
  }
}

export default Tag;
