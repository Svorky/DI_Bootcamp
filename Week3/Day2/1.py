# Exercise 1 : Pets
class Pets():
    def __init__(self, animals: list):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
# Create another cat breed named Siamese which inherits from the Cat class.
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
def main():
    # Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
    bengal = Bengal("Bengi", 3)
    chartr = Chartreux("Charty", 5)
    siamese = Siamese("Siamy", 7)
    all_cats = [bengal, chartr, siamese]

    # Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
    sara_pets = Pets(all_cats)

    # Take all the cats for a walk, use the walk method.
    sara_pets.walk()

if __name__ == "__main__":
    main()
    
