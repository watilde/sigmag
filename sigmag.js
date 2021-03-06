$.fn.sigma = function (debug) {
  'use strict';
  function sigmaToCalculation(i, u, l, m) {
    var calculation = '(function () {';
    calculation += 'var sum = 0;';
    calculation += 'for (var ' + i + ' = ' +
      l + '; ' + u + ' >= ' + i + '; ' + i + '++) {';
    calculation += '  sum += ' + m + ';';
    calculation += '}';
    calculation += 'return sum;';
    calculation += '}());';
    return calculation;
  }
  try {
    var index = $(this).children('.sigma__index').html();
    var upper = $(this).children('.sigma__upper-bound').html();
    var lower = $(this).children('.sigma__lower-bound').html();
    var map = $(this).children('.sigma__map').html();
    var calculation = sigmaToCalculation(index, upper, lower, map);
    var result = eval(calculation);
    var div = $("<div>");
    $(div).addClass('sigma__result').html(result);
    $(this).children('.sigma__result').remove();
    $(this).append(div);
  } catch (e) {
    if (debug) console.error(e.message);
  }
};

$(document).ready(function () {
  $('[data-role="sigma"]').each(function (){
    $(this).sigma();
  });
});
