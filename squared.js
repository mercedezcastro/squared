const _ = require('underscore');
// delete this when finished to run in Chrome

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array);

function squared(data) {
  return _.partition(data, function (num) { return (Math.sqrt(num) % 1) === 0; });
}
console.log(squared(array));
