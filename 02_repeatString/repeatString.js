const repeatString = function(string, repeats) {

  if(repeats < 0) {
    return "ERROR";
  }

  let newString = "";
  for (let i = 0; i < repeats; i++) {
    newString = newString.concat(string);
  }
  return newString;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
