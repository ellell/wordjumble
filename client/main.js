'use strict';

var on = require('dom-events').on;
var setupSlides = require('./slides');
var setupInputTable = require('./input-table');
var renderResult = require('./result-table');
var defaultOpts = {
  rowLabels: ['känsla', 'färg', 'form'],
  nrOfCols: 3,
  container: document.querySelector('#input-table')
};

var inputTable = setupInputTable(defaultOpts);

var slides = setupSlides({
  container: document.querySelector('#main-container')
});

var generateBtn = document.querySelector('.generate');
on(generateBtn, 'click', function (e) {
  e.preventDefault();
  renderResult({
    container: document.querySelector('#result-table'),
    values: inputTable.getValues()
  });
  slides.next();
});

var backBtn = document.querySelector('.back');
on(backBtn, 'click', function (e) {
  e.preventDefault();
  slides.prev();
});

renderResult({
  container: document.querySelector('#result-table'),
  values: [[1, 2, 3], [11, 22, 33], [111, 222, 333]]
});
