# Exercise 3 : Dogs Domesticated
# Create a new python file and import your Dog class from the previous exercise.
from dog import Dog
import random
# In the new python file, create a class named PetDog that inherits from Dog.
class PetDog(Dog):
    
    # Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
    def __init__(self, name: str, age: int, weight: int, trained = False) -> None:
        super().__init__(name, age, weight)
        self.trained = trained
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
    def train(self):
        self.bark()
        self.trained = True
# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.
    def play(self, *args: Dog):
        names = [dog.name for dog in args]
        names.insert(0, self.name)
        dogs = ", ".join(names)
        print(f"{dogs} all play together")

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
    def do_a_trick(self):
        rand = random.randint(0,3)
        messages = ["{dog_name} does a barrel roll",
        "{dog_name} stands on his back legs",
        "{dog_name} shakes your hand",
        "{dog_name} plays dead"]
        print(messages[rand].format(dog_name = self.name))
        
def main():
    dog1 = PetDog("Tomato", 3, 4)
    dog2 = PetDog("Cucumber", 5, 5)
    
    dog1.train()
    dog2.play(dog1)
    
    dog1.do_a_trick()
    
if __name__ == "__main__":
    main()
    
    