'use strict';

var renderInputTable = require('./input-table');

var defaultOpts = {
  rowLabels: ['känsla', 'färg', 'form'],
  nrOfCols: 3,
  container: document.querySelector('#input-table')
};

renderInputTable(defaultOpts);
