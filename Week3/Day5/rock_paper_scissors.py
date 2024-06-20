from game import Game

def get_user_menu_choice()->dict:
    print("Menu:")
    print("(g) Play a new game")
    print("(x) Show scores and exit")
    user = input(" :  ").strip().lower()
    if user not in ["g","x"]:
        return {"success": False, "user_choise": ""}
    else:
        return {"success": True, "user_choise": user}

def print_results(results: dict):
    print("Game results:")
    print(f"You won {results['win']} times")
    print(f"You lose {results['loss']} times")
    print(f"You drew {results['draw']} times")
    print()
    print("Thank you for playing!")

def main():
    g = Game()
    while True:
        response = get_user_menu_choice()
        if response["success"]:
            if response["user_choise"] == "g":
                g.play()
            else:
                print_results(g.score)
                break



if __name__ == "__main__":
    main()