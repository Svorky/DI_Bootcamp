import random


class Card:
    def __init__(self, suit, value) -> None:
        self.suit = suit
        self.value = value
        
    def __str__(self) -> str:
        return f"Card {self.value} of {self.suit}"
    
    def __repr__(self) -> str:
        return f"Card {self.value} of {self.suit}"

class Deck:
    def __init__(self) -> None:
        self.cards = self.create_deck()
    
    def create_deck(self) -> list[Card]:
        suits = ("Hearts", "Diamonds", "Clubs", "Spades")
        values = ("A","2","3","4","5","6","7","8","9","10","J","Q","K")
        cards = []
        for suit in suits:
            for value in values:
                cards.append(Card(suit, value))
        
        return cards
    
    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)
        else:
            print("The deck is not full")
        # print(self.cards)
        
    def deal(self):
        if len(self.cards) > 0:
            card = self.cards.pop(0)
            return card
        else:
            print("The deck is empty")
        
d1 = Deck()
d1.shuffle()
card = d1.deal()
print(card)
