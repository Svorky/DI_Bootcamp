# 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
cost = 0
for (name, age) in family.items():
    if 3 <= int(age) < 12:
        cost += 10
        print(f"{name} pays {10}$")
    elif int(age) >= 12:
        cost += 15
        print(f"{name} pays {15}$")
    else:
        print(f"{name} pays nothing, the ticket is free")

print(f"total cost: {cost}$")

# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
family = {}

while True:
    user = input("type a name and an age or quit for exit: ")
    if user == 'quit':
        break
    splitted = user.split(" ")
    family[splitted[0]] = int(splitted[1])

cost = 0
for (name, age) in family.items():
    if 3 <= int(age) < 12:
        cost += 10
        print(f"{name} pays {10}$")
    elif int(age) >= 12:
        cost += 15
        print(f"{name} pays {15}$")
    else:
        print(f"{name} pays nothing, the ticket is free")

print(f"total cost: {cost}$")
