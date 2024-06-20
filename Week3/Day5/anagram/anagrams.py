import anagram_checker

def main():
    while True:
        while True:
            user_input = input("Your word: ").upper().strip()
            if len(user_input.split(" ")) > 1:
                print("Please, type only one word")
            else:
                if user_input.isalpha():
                    break
                else:
                    print("Please, type only letters")

        print(f"YOUR WORD: \"{user_input}\"")
        anagram_obj = anagram_checker.Anagram_Checker()
        valid = anagram_obj.is_valid(user_input)
        if valid:
            print("this is a valid English word.")
        else:
            print("this is not a valid English word.")

        anagrams = anagram_obj.get_anagrams(user_input)
        if len(anagrams) == 0:
            print("There are no anagrams for your word.")
        else:
            print(f"Anagrams for your word: {', '.join(anagrams)}.")

        exit = False
        while True:
            user_exit = input("Do you want to exit? Y/N ").lower()
            if user_exit not in ['y', 'n']:
                print("Please, write only Y or N")
            else:
                if user_exit == 'y':
                    exit = True
                break
        if exit:
            break


if __name__ == "__main__":
    main()
