import random

user = int(input("input a number from 1 to 9: "))
random = random.randint(3, 9)

if user == random:
    print("Winner!")
else:
    print("better luck next time")