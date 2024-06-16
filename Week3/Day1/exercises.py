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

# Exercise 2 : Dogs
class Dog:
    def __init__(self, name, height) -> None:
        self.name = name
        self.height = height
        
    def bark(self):
        print(f"{self.name} goes woof!")
        
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")
        
davids_dog = Dog('Rex', 50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(davids_dog.name)
else:
    print(sarahs_dog.name)

# Exercise 3 : Who’s The Song Producer?
class Song:
    def __init__(self, lyrics: list) -> None:
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for l in self.lyrics:
            print(l)
            
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo
class Zoo:
    def __init__(self, zoo_name) -> None:
        self.zoo_name = zoo_name
        self.animals = []
        self.groups = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(", ".join(self.animals))

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_list = sorted(self.animals)
        letters = {}
        for animal in sorted_list:
            first = animal[0]
            if first not in letters:
                letters[first] = len(letters) + 1

            if letters[first] not in self.groups:
                self.groups[letters[first]] = animal
            elif isinstance(self.groups[letters[first]], list):
                self.groups[letters[first]].append(animal)
            else:
                self.groups[letters[first]] = [self.groups[letters[first]]]
                self.groups[letters[first]].append(animal)
        print(self.groups)

    def get_groups(self, group):
        if isinstance(self.groups[group], list):
            for animal in self.groups[group]:
                print(animal)
        else:
            print(self.groups[group])


ramat_gan_safari = Zoo("Ramat Gan Safari")

for animal in ['Ape', 'Baboon', 'Bear', 'Cat', 'Cougar', 'Eel', 'Emu']:
    ramat_gan_safari.add_animal(animal)

ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups(3)
