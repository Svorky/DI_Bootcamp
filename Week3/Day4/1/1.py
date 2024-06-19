# Exercise 1 – Random Sentence Generator
import os
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

def get_words_from_file():
    content = ""
    with open(os.path.join(__location__, 'sowpods.txt')) as file:
        content = file.read()
    
    content_list = content.split("\n")
    return content_list

import random
def get_random_sentence(length):
    rand = []
    words = get_words_from_file()
    for _ in range(length):
        rand.append(random.randint(0,len(words)))
    
    sentence = []
    for idx in rand:
        sentence.append(words[idx].lower())
        
    return " ".join(sentence)

def main():
    print("Random Sentence Generator")
    length = 0
    while True:
        user = int(input("how long you want the sentence to be: "))
        if 2 <= user <= 20:
            length = user
            break
        else:
            print("Please, type an intgere between 2 and 20.")
    sen = get_random_sentence(length)
    print(sen)
    
if __name__ == "__main__":
    main()
    
