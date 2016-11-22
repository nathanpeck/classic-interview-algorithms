// Given two or more arrays full of integers find a list of
// integers that are common to all the arrays.

function commonElements(arrays) {
  var hash = {};
  
  for (var array in arrays) {
    for (var element in arrays[array]) {
      if (!hash[arrays[array][element]]) {
        hash[arrays[array][element]] = {};
      }
      
      hash[arrays[array][element]][array] = true;
    }
  }
  
  var commonElements = [];
           
  for (var element in hash) {
    if (Object.keys(hash[element]).length == arrays.length) {
      commonElements.push(parseInt(element));
    }
  }
  
  return commonElements;
}
           
console.log(commonElements([
  [3, 2],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2]
]));
