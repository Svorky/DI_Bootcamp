user_input = int(input("Type a number between 1 and 100: "))
res = ""

if user_input > 0 and user_input <= 100:
    if user_input % 3 == 0:
        res = "Fizz"
    
    if user_input % 5 == 0:
        res += "Buzz"
        
    print(res)
else:
    print("Your number not between 1 and 100")