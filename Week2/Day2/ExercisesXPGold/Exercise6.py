words = list()
for i in range(1,8):
    words.append(input("your word: "))
    
letter = input("your character: ")

for word in words:
    if word.find(letter) != -1:
        print(word.index(letter))
    else:
        print(f"no letter {letter} in {word}")