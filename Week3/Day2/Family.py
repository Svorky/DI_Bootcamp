# Exercise 4 : Family
#Create a class called Family and implement the following attributes:
#members: list of dictionaries
#last_name : (string)

#Implement the following methods:
#born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
#is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
#family_presentation: a method that prints the family’s last name and all the members’ details.

class Family:
    def __init__(self, members: list[dict], last_name: str) -> None:
        self.members = members
        self.last_name = last_name
    
    # why I should use kwargs here?
    def born(self, child: dict):
        child["age"] = 0
        child["is_child"] = True
        self.members.append(child)
        print("Congratulation!")
        
    def is_18(self, name: str):
        fltr = [member["age"] for member in self.members if member["name"].lower() == name.lower()]
        if fltr[0] > 17:
            return True
        return False
        
    def family_presentation(self, greeting = "Family last name:"):
        print(f"{greeting} {self.last_name}")
        for member in self.members:
            for key, value in member.items():
                print(f"  {key}: {value}")
            print()

# Exercise 5 : TheIncredibles Family
class TheIncredibles(Family):
    def __init__(self, members: list[dict], last_name: str) -> None:
        super().__init__(members, last_name)
        
    def use_power(self, name: str):
        fltr = [member for member in self.members if member["name"].lower() == name.lower()]
        try:
            assert fltr[0]["age"] > 17
            print(fltr[0]["power"])
        except AssertionError:
            print("not over 18 years old")
        
    def incredible_presentation(self):
        self.family_presentation("Here is our powerful family")
        

def main():
    smiths = Family([
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ], "Smith")
    
    smiths.born({"name": "Jhon", "gender": "Male"})
    smiths.is_18("Sarah")
    
    smiths.family_presentation()
    
    incredibles = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
    theincredibles = TheIncredibles(incredibles, "Incredible")
    
    theincredibles.incredible_presentation()
    
    theincredibles.born({"name": "Baby Jack", "gender": "Male", "power": "Unknown power"})
    
    theincredibles.incredible_presentation()
    
    theincredibles.use_power("Sarah")
    
    theincredibles.use_power("Baby Jack")
    
if __name__ == "__main__":
    main()
