const removeFromArray = function(array, ...remove) {
  const removals = [...remove];
  return array.filter(number => !removals.includes(number));  
};

// Do not edit below this line
module.exports = removeFromArray;
