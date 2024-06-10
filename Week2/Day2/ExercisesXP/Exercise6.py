my_name = "Alexander"
active = True

while active:
    user_name = input("Put your name:\n")
    
    if user_name.lower() == my_name.lower():
        active = False