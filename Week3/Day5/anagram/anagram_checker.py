import os
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

class Anagram_Checker:
    def __init__(self) -> None:
        self.words = self.__get_words_from_file()
    
    def __get_words_from_file(self)->list[str]:
        content = ""
        with open(os.path.join(__location__, 'sowpods.txt')) as file:
            content = file.read()
        
        content_list = content.split("\n")
        return content_list
    
    def is_valid(self,word:str)->bool:
        if word.upper() in self.words:
            return True
        return False
    
    def get_anagrams(self,user_word:str):
        sorted_word = sorted(user_word)
        anagrams = []
        for word in self.words:
            if sorted_word == sorted(word):
                anagrams.append(word)
        return anagrams