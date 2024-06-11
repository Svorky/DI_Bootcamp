# 1
user = input("type a word: ")

word = [c for c in user]
# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
result = {}
for (idx, letter) in enumerate(word):
    if result.get(letter):
        result[letter].append(idx)
    else:
        result[letter] = [idx]
        
print(result)

