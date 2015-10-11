'use strict';

var on = require('dom-events').on;
var renderInputTable = require('./input-table');
var renderResult = require('./result-table');
var defaultOpts = {
  rowLabels: ['känsla', 'färg', 'form'],
  nrOfCols: 3,
  container: document.querySelector('#input')
};

renderInputTable(defaultOpts);

var generateBtn = document.querySelector('.generate');
on(generateBtn, 'click', function (e) {
  e.preventDefault();
  renderResult({
    container: document.querySelector('#result')
  });
});
