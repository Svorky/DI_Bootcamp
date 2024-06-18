# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles
class Circle:
    
    def __init__(self, radius: int) -> None:
        self.radius = radius
    
    def __str__(self) -> str:
        return f"This a circle of radius {self.radius}"

    def __repr__(self) -> str:
        return f"radius: int = {self.radius}"
    
    def __add__(self, other):
        new_radius = self.radius + other.radius
        return Circle(new_radius)
    
    def __lt__(self, other) -> bool:  # < - less than operator
        return self.radius < other.radius

    def __gt__(self, other) -> bool:  # > - greater than operator
        return self.radius > other.radius
    
    def __eq__(self, other: object) -> bool:
        return self.radius == other.radius
    
c1 = Circle(10)
c2 = Circle(20)

print(repr(c1))
c3 = c1 + c2
print(c3)
print(c2 > c1)
print(c3 < c1)
print(c1 < c3)
print(c1 + c2 == c3)

c4 = Circle(1)
circles = [c1,c2,c3,c4]
circles.sort()
for circle in circles:
    print(circle)
