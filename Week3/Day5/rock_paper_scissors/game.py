import random
class Game:
    def __init__(self) -> None:
        self.mapping = {
            "r": "rock",
            "s": "scissors",
            "p": "paper"
        }
        self.score = {
            "win": 0,
            "loss": 0,
            "draw": 0
        }
    
    def get_user_item(self):
        user_input = ""
        while True:
            user_input = input("Select (r)ock, (p)aper or (s)cissors: ").strip().lower()
            if user_input not in self.mapping.keys():
                print("Type a valid char, please.")
            else:
                break
        return self.mapping[user_input]
    
    def get_computer_item(self):
        return random.choice(list(self.mapping.values()))
    
    def get_game_result(self, user_item, computer_item):
        beeting = {
            "paper": "rock",
            "scissors": "paper",
            "rock": "scissors",
        }
        
        if user_item == computer_item:
            self.score["draw"] += 1
            return 0
        
        if beeting[user_item] == computer_item:
            self.score["win"] += 1
            return 1
        else:
            self.score["loss"] += 1
            return -1
        
    def play(self):
        user_choise = self.get_user_item()
        computer_choise = self.get_computer_item()
        result = self.get_game_result(user_choise, computer_choise)
        if result == 0:
            print(f"You selected {user_choise}. The computer selected {computer_choise}. It's a draw.")
        elif result == 1:
            print(f"You selected {user_choise}. The computer selected {computer_choise}. You win!")
        else:
            print(f"You selected {user_choise}. The computer selected {computer_choise}. You lose.")