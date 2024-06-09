sentence_len = 0

while True:
    user_input = input("Type a sentence without the character \"A\":\n")

    if "a" in user_input.lower():
        break

    tmp_len = len(user_input)
    if(tmp_len > sentence_len):
        sentence_len = tmp_len
        print("Good job!")