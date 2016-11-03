// Given a list of words, find all the words in the list
// that are anagrams of other words on the list.

var words = [
  'cloud',
  'face',
  'slot',
  'could',
  'loud',
  'lots',
  'lost'
];

var table = {};

for (var i = 0; i < words.length; i++) {
  var key = words[i].split('').sort().join();
  
  if (!table[key]) {
    table[key] = {};
  }
  
  table[key][words[i]] = true;
}

var allAnagrams = [];

for (var key in table) {
  var anagrams = Object.keys(table[key]);
  
  if (anagrams.length > 1) {
    allAnagrams = allAnagrams.concat(anagrams);
  }
}

console.log('All anagrams: ', allAnagrams);
