'use strict';

var h = require('hyperscript');

module.exports = function (opts) {
  var container = opts.container;
  var rowLabels = opts.rowLabels;
  var nrOfCols = opts.nrOfCols;

  rowLabels.forEach(function (label) {
    container.appendChild(createRow(label, nrOfCols))
  });

  return {
    getValues: getValues(container),
    validate: validate(container)
  }
};

function validate (container) {
  return function () {
    var isValid = true;
    var inputs = container.querySelectorAll('input');
    [].forEach.call(inputs, function (input) {
      input.classList.remove('error');
      if (!input.value) {
        isValid = false;
        setTimeout(function () {
          input.classList.add('error');
        }, 40);
      }
    });

    return isValid;
  };
}

function getValues (container) {
  return function () {
    var values = [];
    var rows = container.querySelectorAll('.row');
    [].forEach.call(rows, function (row) {
      var categoryValues = [];
      var inputs = row.querySelectorAll('input');
      [].forEach.call(inputs, function (input) {
        categoryValues.push(input.value);
      });

      values.push(categoryValues);
    });

    return values;
  };
}

function createRow (label, nrOfCols) {
  return h('div.row',
    h('span.cell.label.bold', label),
    createCols(nrOfCols)
  );
}

function createCols (nrOfCols) {
  var cols = [];
  for (var i = 0; i < nrOfCols; i++) {
    cols.push(
      h('span.cell.value',
        h('input', {
          type: 'text',
          onfocus: function () { this.classList.remove('error') } 
        })
      )
    );
  }

  return cols;
}
