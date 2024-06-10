user_fruits = input("Type yout favorite fruits, separate by sapce:\n")

list_fruits = user_fruits.split(" ")

user_fruit = input("Type one fruit:\n")

if list_fruits.count(user_fruit):
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")