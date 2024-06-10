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