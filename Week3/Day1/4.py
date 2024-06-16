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
