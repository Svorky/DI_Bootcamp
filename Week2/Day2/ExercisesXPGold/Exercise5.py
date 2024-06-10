alphabet = 'abcdefghijklmnopqrstuvwxyz'
vowels = ['a','e','i','o','u']
for c in alphabet:
    if vowels.count(c) > 0:
        print(f"{c} is vowel")
    else:
        print(f"{c} is consonant")