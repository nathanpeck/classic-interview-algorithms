// Write a function that takes in the string "aaabbccccdd" and outputs "a3b2c4d2".

function rleString(string) {
  var rleOutput = '';
  
  var string = string.split('');
  var currentChar = string[0];
  var count = 0;
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] == currentChar) {
      count++;
    } else {
      rleOutput += currentChar + count;
      currentChar = string[i];
      count = 1;
    }
  }
  
  rleOutput += currentChar + count;
  
  return rleOutput;
}

console.log(rleString('aaabbccccdd'));
