'use strict';

import Component from './component';

export default (data) => {
  for(let i in data.cells) {
    data.cells[i].component = Component;
  }

  return data;
};
