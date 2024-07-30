// declarative
function convUpperCase(value) {
  return value.toUpperCase();
}

// expression
var convUpperCase2 = function (value) {
  return value.toUpperCase();
};

// arrow
var convUpperCase3 = (value) => {
  return value.toUpperCase();
};

console.log(convUpperCase("declarative"));
console.log(convUpperCase2("expression"));
console.log(convUpperCase3("arrow"));
