
function isPartOfString(part, whole) {
  return whole.toString().indexOf(part.toString()) >= 0;
}

function isPartOfNumber(part, whole) {
  return whole % part === 0;
}

function isPartOf(part, whole) {
  return isPartOfString(part, whole) || isPartOfNumber(part, whole);
};

const rules = [
  [3, "fizz"],
  [5, "buzz"],
  [7, "pass"]
];

const num2tag = (num) => rules.map( 
  (rule) => isPartOf(rule[0], num) ? rule[1] : "" 
);

function fizzbuzz(num) {
  if (Number.isInteger(num) && num >= 1 && num <= 100) {
    console.log(num, num2tag(num));
    return num2tag(num).join("") || num; 
  } else {
    return "error!"
  }
}

module.exports = fizzbuzz;
