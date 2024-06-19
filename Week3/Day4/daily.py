# Daily Challenge : Text Analysis
from collections import Counter
import string

class Text:
    def __init__(self, text: str) -> None:
        self.text = text.translate(str.maketrans('', '', string.punctuation)).lower()
        
    def frequency(self):
        words_list = self.text.split(" ")
        stripped = [word.strip() for word in words_list]
        words_counter = Counter(stripped)
        return words_counter
    
    def most_common(self):
        words_list = self.text.split(" ")
        stripped = [word.strip() for word in words_list]
        words_counter = Counter(stripped)
        return words_counter.most_common()
    
    def all_uniq(self):
        words_list = self.text.split(" ")
        stripped = [word.strip() for word in words_list]
        words_counter = Counter(stripped)
        uniqs = [k for k, v in words_counter.items() if v == 1]
        return uniqs
    
    @classmethod
    def from_file(self, filename):
        lines = ""
        with open(filename, mode = 'r') as file:
            lines = file.read()
        return self(lines)

t1 = Text("A good book would sometimes cost as much as a good house.")
print(t1.frequency())
print(t1.most_common())
print(t1.all_uniq())

import os
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

print("From file")
t2 = Text.from_file(os.path.join(__location__, 'the_stranger.txt'))
print(t2.frequency())
print(t2.most_common())
print(t2.all_uniq())

