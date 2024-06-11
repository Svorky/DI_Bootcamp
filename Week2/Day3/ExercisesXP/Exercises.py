# 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

print(dict(zip(keys, values)))

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

# 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H & M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": ["blue"],
        "Spain": ["red"],
        "US": ["pink", "green"]
    }
}

brand["country_creation"] = "Spain"

if brand.get("international_competitors"):
    brand["international_competitors"].append("Desigual")
print(brand)

del brand["creation_date"]

print(brand["international_competitors"][-1])

print(brand["major_color"]["US"])

print(len(brand))

print(brand.keys())

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print(brand["number_stores"])

# 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}
for (index_count, name) in enumerate(users):
    disney_users_A[name] = index_count
    
print(disney_users_A)

disney_users_B = {}
for (index_count, name) in enumerate(users):
    disney_users_B[index_count] = name

print(disney_users_B)

disney_users_C = {}
users.sort()
for (index_count, name) in enumerate(users):
    disney_users_C[name] = index_count
    
print(disney_users_C)

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_I = {}
for (index_count, name) in enumerate(users):
    if "i" in name:
        disney_users_I[name] = index_count
print(disney_users_I)

disney_users_MP = {}
for (index_count, name) in enumerate(users):
    if name[0] == "M" or name[0] == "P":
        disney_users_MP[name] = index_count
print(disney_users_MP)
