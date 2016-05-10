'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import UnfoldJson from 'unfold-json';

import Layout from './../../src/index.jsx';
import GetComponent from './get_component';

(() => {
  let data = {
    "noSpacing": false,
    "cells": [
      {
        "desktop": "4",
        "component": "Component",
        "data": {"value": "1"}
      },
      {
        "desktop": "4",
        "component": "Component",
        "data": {"value": "2"}
      },
      {
        "desktop": "4",
        "component": "Component",
        "data": {"value": "3"}
      }
    ]
  };

  document.getElementById("data").innerHTML = UnfoldJson(JSON.stringify(data));
  ReactDOM.render(<Layout data={ GetComponent(data) }/>, document.getElementById("root"));



// Here is not related to this project
  let is_no_spacing = false;
  document.getElementById("switch-spacing").addEventListener('click', () => {
    is_no_spacing = !is_no_spacing;

    data = document.getElementById("data").value;
    let actul_data = JSON.parse(data);
    actul_data.noSpacing = is_no_spacing;
    document.getElementById("data").innerHTML = UnfoldJson(JSON.stringify(actul_data));

    ReactDOM.render(<Layout data={ GetComponent(actul_data) } />, document.getElementById("root"));
  });

  document.getElementById("submit").addEventListener('click', () => {
    data = document.getElementById("data").value;
    ReactDOM.render(<Layout data={ GetComponent(JSON.parse(data)) } />, document.getElementById("root"));
  });


  document.getElementById("add").addEventListener('click', () => {
    let desktop = document.getElementById("desktop").value;
    let tablet = document.getElementById("tablet").value;
    let phone = document.getElementById("phone").value;
    let data = document.getElementById("data").value;
    let actul_data = JSON.parse(data);
    let new_data = {
      "component": "Component",
      "data": {
        "value": actul_data.cells.length + 1
      }
    };

    if(desktop !== "") new_data["desktop"] = desktop;
    if(tablet !== "") new_data["tablet"] = tablet;
    if(phone !== "") new_data["phone"] = phone;
    actul_data.cells.push(new_data);
    document.getElementById("data").innerHTML = UnfoldJson(JSON.stringify(actul_data));

    ReactDOM.render(<Layout data={ GetComponent(actul_data) } />, document.getElementById("root"));
  });
})();
