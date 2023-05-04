const sumAll = function(num1, num2) {

  const args = [...arguments];

  const nonNumberFound = args.some(arg => {
    return typeof arg !== "number";
  })

  const negativeNumberFound = args.some(arg => {
    return arg < 0;
  })

  if (nonNumberFound || negativeNumberFound) {
    return 'ERROR';
  }

  // sort and destructure args into min and max;
  const [min, max] = args.sort((a, b) => a - b);

  let sum = 0;
  
  for (let index = min; index <= max; index++) {
    sum += index;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
