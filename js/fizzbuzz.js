const R = require("ramda");

function isPartOfString(part, whole) {
  return whole.toString().indexOf(part.toString()) >= 0;
}

function isPartOfNumber(part, whole) {
  return whole % part === 0;
}

function isPartOf(part, whole) {
  return isPartOfString(part, whole) || isPartOfNumber(part, whole);
};

const tags = [
  [3, "fizz"],
  [5, "buzz"]
];

const number2tag = (num) => tags.reduce(
  (acc, tag) => isPartOf(tag[0], num) ? acc + tag[1] : acc,
  ""
)


function fizzbuzz(num) {
  if (Number.isInteger(num) && num >= 1 && num <= 100) {
    return number2tag(num) || num;
  } else {
    return "error!"
  }
}

module.exports = fizzbuzz;
