# Exercise 2 : Dogs
# Create a class called Dog with the following attributes name, age, weight.
class Dog():
    
    def __init__(self, name: str, age: int, weight: int) -> None:
        self.name = name
        self.age = age
        self.weight = weight
    
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.
    def bark(self):
        print(f"{self.name} is barking")
    
    def run_speed(self):
        return self.weight / (self.age * 10)
    
    def fight(self, other_dog):
        if (self.run_speed() * self.weight) > (other_dog.run_speed() * other_dog.weight):
            print(f"{self.name} won")
        else:
            print(f"{other_dog.name} won")
        
# Create 3 dogs and run them through your class.
def main():
    dog1 = Dog("Doggy", 3, 5)
    dog2 = Dog("Kolly", 4, 6)
    dog3 = Dog("Brownie", 5, 4)
    
    dog1.fight(dog2)
    dog1.fight(dog3)
    dog2.fight(dog3)


if __name__ == "__main__":
    main()

