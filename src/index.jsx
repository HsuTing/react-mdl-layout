'use strict';

import React from 'react';

import Null from 'react-null';

export default class Layout extends React.Component {
  render() {
    if(this.props.data === undefined) return null;

    let gridId = this.props.data.id === undefined ? "" : this.props.data.id;
    let gridClass = this.props.data.noSpacing ? "mdl-grid mdl-grid--no-spacing" : "mdl-grid";
    gridClass += this.props.data.class === undefined ? "" : " "+this.props.data.class;
    let gridStyle = this.props.data.style === undefined ? {} : this.props.data.style;
    let cells = this.props.data.cells === undefined ? [] : this.props.data.cells;

    return (
      <div id={ gridId }
           className={ gridClass }
           style={ gridStyle }
      >
        {cells.map((d, i) => {
          let cellId = d.id === undefined ? "" : d.id;
          let cellClass = "mdl-cell";
          cellClass += d.desktop === undefined ? " mdl-cell--hide-desktop" : " mdl-cell--"+d.deskop+"-col";
          cellClass += d.tablet === undefined ? " mdl-cell--hide-tablet" : " mdl-cell--"+d.tablet+"-col-tablet";
          cellClass += d.phone === undefined ? " mdl-cell--hide-phone" : " mdl-cell--"+d.phone+"-col-phone";
          cellClass += d.class === undefined ? "" : " "+d.class;
          let cellStyle = d.style === undefined ? {} : d.style;
          let ChildNode = d.child === undefined ? Null : d.child;
          let data = d.data === undefined ? {} : d.data;

          return (
            <div key={ i }
                 id={ cellId }
                 className={ cellClass }
                 style={ cellStyle }
            >
              <ChildNode data={ data } />
            </div>
          );
        })}
      </div>
    );
  }
};
