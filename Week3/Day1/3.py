# Exercise 3 : Who’s The Song Producer?
class Song:
    def __init__(self, lyrics: list) -> None:
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for l in self.lyrics:
            print(l)
            
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()
