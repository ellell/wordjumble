'use strict';

var h = require('hyperscript');

module.exports = function (opts) {
  var container = opts.container;
  var rowLabels = opts.rowLabels;
  var nrOfCols = opts.nrOfCols;

  rowLabels.forEach(function (label) {
    container.appendChild(createRow(label, nrOfCols))
  });
};

function createRow (label, nrOfCols) {
  return h('div.row',
    h('span.label', label),
    createCols(nrOfCols)
  );
}

function createCols (nrOfCols) {
  var cols = [];
  for (var i = 0; i < nrOfCols; i++) {
    cols.push(
      h('span.col',
        h('input', { type: 'text' })
      )
    );
  }

  return cols;
}
