words = [
  'cloud',
  'face',
  'slot',
  'could',
  'loud',
  'lots',
  'lost'
]

table = {}

for word in words:
    word = word.lower()

    key = ''.join(sorted(set(word)))

    if key not in table:
        table[key] = {}

    table[key][word] = True


anagrams = []

for key in table:
    matched = table[key].keys()

    if len(matched) > 1:
        anagrams += matched

print(anagrams)