// Function to check if a string is a pangram (sentence containing all the letters of
// the alphabet).

function isPanagram(string) {
  var alphabet = {};

  for (var char = 0; char < string.length; char++) {
    var currentChar = string[char].toLowerCase();
    
    if (currentChar.match(/^[A-z]+$/)) {
      alphabet[currentChar] = true;
    }
  }

  if (Object.keys(alphabet).length == 26) {
    return true;
  }
  
  return false;
}

console.log(isPanagram('Pack my box with five dozen liquor jugs'));
console.log(isPanagram('not a panagram'));
