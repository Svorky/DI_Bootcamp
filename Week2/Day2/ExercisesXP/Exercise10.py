sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while sandwich_orders.count("Pastrami sandwich") > 0:
    sandwich_orders.remove("Pastrami sandwich")
    
finished_sandwiches = list()

while len(sandwich_orders) > 0:
    finished_sandwiches.append(sandwich_orders[0])
    sandwich_orders.pop(0)
    
for finish in finished_sandwiches:
    print(f"I made your {finish}")