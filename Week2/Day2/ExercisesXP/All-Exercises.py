# 1
my_fav_numbers = {4,13,7}
my_fav_numbers.add(55)
my_fav_numbers.add(1)
my_fav_numbers.remove(1)

friend_fav_numbers = {5,6,7}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# 2
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# No

# 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")

basket.count("Apples")

basket.clear()

print(basket)

# 4
l = list()
for n in range(3, 11):
    l.append(n / 2)

# 5
for i in range(1, 21):
    print(i)
    
index = 0
for i in range(1, 21):
    if index % 2 == 0:
        print(i)
    index += 1
    
# 6
my_name = "Alexander"
active = True

while active:
    user_name = input("Put your name:\n")
    
    if user_name.lower() == my_name.lower():
        active = False

# 7
user_fruits = input("Type yout favorite fruits, separate by sapce:\n")

list_fruits = user_fruits.split(" ")

user_fruit = input("Type one fruit:\n")

if list_fruits.count(user_fruit):
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")
    
    
# 8
typing = True
toppings = list()
while typing:
    user_input = input("enter a pizza topping. type quit for exit.\n")
    if user_input == 'quit':
        typing = False
    else:
        toppings.append(user_input)
        
price = 10
for top in toppings:
    print(top)
    price += 2.5
    
print(f"total price is {price}")

# 9
ages = input("eneter ages, separate by space:\n").split(" ")

price = 0
for age in ages:
    if 3 <= int(age) < 12:
        price += 10
    elif int(age) >= 12:
        price += 15
        
print(f"total: {price}$")

teenagers = ["john", "adam", "ben", "yossi"]
rem = list()
for teen in teenagers:
    age = input(f"how old is {teen}?\n")
    if 16 < int(age) < 21:
        rem.append(teen)

for r in rem:
    teenagers.remove(r)

print("only these mans can watch a movie:\n")
for teen in teenagers:
    print(teen)
    
# 10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while sandwich_orders.count("Pastrami sandwich") > 0:
    sandwich_orders.remove("Pastrami sandwich")
    
finished_sandwiches = list()

while len(sandwich_orders) > 0:
    finished_sandwiches.append(sandwich_orders[0])
    sandwich_orders.pop(0)
    
for finish in finished_sandwiches:
    print(f"I made your {finish}")