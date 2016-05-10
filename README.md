# React MDL Layout

This project is combined `react` and layout of `material design lite`. I use react to do [this](https://getmdl.io/components/index.html#layout-section/grid).

## Include file

- You can see [here](https://getmdl.io/started/index.html).

## Use

- This is a react class. As a result, you need to use `ReactDOM.render` to render.
```
  import React from 'ract';
  import ReactDOM from 'react-dom';
  import Layout from 'react-mdl-layout';

  import Component from './path/to/component';

  let data = {
    "noSpacing": false,
    "cells": [
      {
        "desktop": "4",
        "component": Component,
        "data": {"value": "1"}
      },
      {
        "desktop": "4",
        "component": Component,
        "data": {"value": "2"}
      },
      {
        "desktop": "4",
        "component": Component,
        "data": {"value": "3"}
      }
    ]
  };

  ReactDOM.render(<Layout data={ data }/>, document.getElementById("root"));
```
- [Test page](http://hsuting.github.io/react-mdl-layout/example/)
- [Simple code](https://github.com/HsuTing/react-mdl-layout/blob/gh-pages/example/src/index.jsx#L33)

## Data

- data:
```
  data = {
    'id': 'gridId',
    'class': 'gridClass',
    'style': {color: 'black'},
    'cells': []
  }

// It will render a html like this
  <div id="gridId" class="mdl-grid gridClass" style="color: black;"></div>
```
- you not need to set all `id`, `class`, `style` and `cells`. You just use attributes needed.

- `data.cells` in `data`:
```
  import Component from './path/to/component';

  cells: [
    {
      'id': 'cellId',
      'class': 'cellClass',
      'style': {color: 'white'},
      'component': Component,
      'data': {'key', 'value'}
    }
  ]

// It will render a html in mdl-grid
  <div id="cellId" class="mdl-cell mdl-cell--hide-desktop mdl-cell--hide-tablet mdl-cell--hide-phone cellClass" style="color: white;">
    // Here is related to your component to render.
    // Your component is need to be a react class
    // Data will be used as `props` in your component.
  </div>
```
- Here also use attributes needs.
- You can set `desktop`, `tablet` and `phone` in `data.cells` to set layout.
    - `desktop` is between 1 to 12.
    - `tablet` is between 1 to 8.
    - `phone` is between 1 to 4.
    - If you do not set those attributes, it will be set `hide`
- You can see [here](https://getmdl.io/components/index.html#layout-section/grid).
