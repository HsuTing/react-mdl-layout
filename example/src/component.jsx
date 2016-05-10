'use strict';

import React from 'react';

export default class Component extends React.Component {
  render() {
    return (
      <div style={{background: "black",
                   padding: "20px",
                   color: "white",
                   textAlign: "center"}}
      >{this.props.data.value}</div>
    );
  }
};
