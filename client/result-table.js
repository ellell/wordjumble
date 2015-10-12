'use strict';

var h = require('hyperscript');

module.exports = function (opts) {
  var container = opts.container;
  var values = opts.values;

  container.innerHTML = '';

  var rows = values.length;
  var cols = values[0].length;

  for (var i = 0; i < rows; i++) {
    var row = h('.row');
    for (var j = 0; j < cols; j++) {
      row.appendChild(createBox(values.map(randomValue)));
    }
    container.appendChild(row);
  }
};

function createBox (values) {
  return h('span.result-box.cell',
    values.map(function (value) {
      return h('span.result-box-value', value);
    })
  );
}

function randomSort(array) {
  return array.sort(function() {
    return 0.5 - Math.random();
  });
}

function randomValue (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
