'use strict';

var h = require('hyperscript');

module.exports = function (opts) {
  var container = opts.container;
  var values = opts.values;

  container.innerHTML = '';
  var groupedRandomValues = [];
  values.forEach(function (categoryValues) {
    randomSort(categoryValues);
    categoryValues.forEach(function (catValue, i) {
      if (!groupedRandomValues[i]) {
        groupedRandomValues[i] = [];
      }

      groupedRandomValues[i].push(catValue);
    });
  });

  groupedRandomValues.forEach(function (values) {
    container.appendChild(createBox(values));
  });
};

function createBox (values) {
  return h('span.result-box',
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
