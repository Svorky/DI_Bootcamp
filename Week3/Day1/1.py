# Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
        
cat1 = Cat("tuzik", 3)
cat2 = Cat("sharik", 5)
cat3 = Cat("murzik", 7)

def oldest(*args):
    old = max(args, key=lambda item: item.age)
    print(f"The oldest cat is {old.name}, and is {old.age} years old.")
    
oldest(cat1, cat2, cat3)
