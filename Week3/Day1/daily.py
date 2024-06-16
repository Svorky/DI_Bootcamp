class Farm:
    def __init__(self, name) -> None:
        self.name = name
        self.animals = {}
        
    def add_animal(self, animal, count = 1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count
            
    def get_info(self):
        info = f"{self.name}'s Farm\n\n"
        
        for [animal,count] in self.animals.items():
            info += f"{animal} : {count}\n"
            
        info += "\nE-I-E-I-0!"
        return info
    
    def get_animal_types(self):
        return list(self.animals.keys())
        
    def get_short_info(self):
        info = f"{self.name}'s farm has "
        if len(self.animals) == 0:
            info += "no animals."
        if len(self.animals) == 2:
            info += f"{self.animals[0]}s and {self.animals[1]}s."
        else:
            plural = list(map(lambda s:s+"s", self.get_animal_types()))
            info += ", ".join(plural[:-1]) + f", and {plural[-1]}."
        print(info)

def main():
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow',5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)
    print(macdonald.get_info())

    print(macdonald.get_animal_types())

    macdonald.get_short_info()
    
if __name__ == "__main__":
    main()